package kr.co.takeit.logging;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import ch.qos.logback.core.UnsynchronizedAppenderBase;

/**
 *
 * @filename kr.co.takeit.logging.TakeDBAppenderBase.java
 * @author Takeit
 * @since 2021.12.24
 * @version 1.0
 * @see
 *
 */
public abstract class TakeDBAppenderBase<E> extends UnsynchronizedAppenderBase<E> {

    protected ConnectionSource connectionSource;
    protected boolean cnxSupportsGetGeneratedKeys = false;
    protected boolean cnxSupportsBatchUpdates = false;

    protected abstract Method getGeneratedKeysMethod();

    protected abstract String getInsertSQL();

    @Override
    public void start() {
        if (connectionSource == null) {
            throw new IllegalStateException("DBAppender cannot function without a connection source");
        }

        // all nice and dandy on the eastern front
        super.start();
    }

    /**
     * @return Returns the connectionSource.
     */
    public ConnectionSource getConnectionSource() {
        return connectionSource;
    }

    /**
     * @param connectionSource
     *          The connectionSource to set.
     */
    public void setConnectionSource(ConnectionSource connectionSource) {
        this.connectionSource = connectionSource;
    }

    @Override
    public void append(E eventObject) {
        Connection connection = null;
        PreparedStatement insertStatement = null;
        try {
            connection = connectionSource.getConnection();
            connection.setAutoCommit(false);

            insertStatement = connection.prepareStatement(getInsertSQL());

            synchronized (this) {
                subAppend(eventObject, connection, insertStatement);
            }

            connection.commit();
        } catch (Throwable sqle) {
            addError("problem appending event", sqle);
        } finally {
            DBHelper.closeStatement(insertStatement);
            DBHelper.closeConnection(connection);
        }
    }

    protected abstract void subAppend(E eventObject, Connection connection, PreparedStatement statement) throws Throwable;

    protected abstract void secondarySubAppend(E eventObject, Connection connection, long eventId) throws Throwable;

    protected long selectEventId(PreparedStatement insertStatement, Connection connection) throws SQLException, InvocationTargetException {
        return 99998385;
    }

    @Override
    public void stop() {
        super.stop();
    }
}
