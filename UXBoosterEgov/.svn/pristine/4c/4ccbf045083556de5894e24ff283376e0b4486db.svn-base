package kr.co.takeit.logging;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @filename kr.co.takeit.logging.DriverManagerConnectionSource.java
 * @author Takeit
 * @since 2021.12.24
 * @version 1.0
 * @see
 *
 */
public class DriverManagerConnectionSource extends ConnectionSourceBase {
    private String driverClass = null;
    private String url = null;

    public void start() {
        try {
            if (driverClass != null) {
                Class.forName(driverClass);
                discoverConnectionProperties();
            } else {
                addError("WARNING: No JDBC driver specified for logback DriverManagerConnectionSource.");
            }
        } catch (final ClassNotFoundException cnfe) {
            addError("Could not load JDBC driver class: " + driverClass, cnfe);
        }
    }

    /**
     * @see ch.qos.logback.core.db.ConnectionSource#getConnection()
     */
    public Connection getConnection() throws SQLException {
        if (getUser() == null) {
            return DriverManager.getConnection(url);
        } else {
            return DriverManager.getConnection(url, getUser(), getPassword());
        }
    }

    /**
     * Returns the url.
     *
     * @return String
     */
    public String getUrl() {
        return url;
    }

    /**
     * Sets the url.
     *
     * @param url
     *          The url to set
     */
    public void setUrl(String url) {
        this.url = url;
    }

    /**
     * Returns the name of the driver class.
     *
     * @return String
     */
    public String getDriverClass() {
        return driverClass;
    }

    /**
     * Sets the driver class.
     *
     * @param driverClass
     *          The driver class to set
     */
    public void setDriverClass(String driverClass) {
        this.driverClass = driverClass;
    }
}
