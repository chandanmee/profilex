// Frontend logging utility

const LOG_LEVELS = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3
};

class Logger {
  constructor() {
    this.level = process.env.NODE_ENV === 'development' ? LOG_LEVELS.DEBUG : LOG_LEVELS.INFO;
    this.enableConsole = true;
    this.logs = [];
    this.maxLogs = 100;
  }

  setLevel(level) {
    this.level = level;
  }

  shouldLog(level) {
    return level <= this.level;
  }

  formatMessage(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const levelName = Object.keys(LOG_LEVELS)[level];
    
    return {
      timestamp,
      level: levelName,
      message,
      data,
      url: window.location.href,
      userAgent: navigator.userAgent
    };
  }

  addToHistory(logEntry) {
    this.logs.push(logEntry);
    
    // Keep only the last maxLogs entries
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }
  }

  error(message, data = null) {
    if (!this.shouldLog(LOG_LEVELS.ERROR)) return;
    
    const logEntry = this.formatMessage(LOG_LEVELS.ERROR, message, data);
    this.addToHistory(logEntry);
    
    if (this.enableConsole) {
      console.error(`[ERROR] ${message}`, data || '');
    }
    
    // In production, you might want to send errors to a logging service
    if (process.env.NODE_ENV === 'production') {
      this.sendToLoggingService(logEntry);
    }
  }

  warn(message, data = null) {
    if (!this.shouldLog(LOG_LEVELS.WARN)) return;
    
    const logEntry = this.formatMessage(LOG_LEVELS.WARN, message, data);
    this.addToHistory(logEntry);
    
    if (this.enableConsole) {
      console.warn(`[WARN] ${message}`, data || '');
    }
  }

  info(message, data = null) {
    if (!this.shouldLog(LOG_LEVELS.INFO)) return;
    
    const logEntry = this.formatMessage(LOG_LEVELS.INFO, message, data);
    this.addToHistory(logEntry);
    
    if (this.enableConsole) {
      console.info(`[INFO] ${message}`, data || '');
    }
  }

  debug(message, data = null) {
    if (!this.shouldLog(LOG_LEVELS.DEBUG)) return;
    
    const logEntry = this.formatMessage(LOG_LEVELS.DEBUG, message, data);
    this.addToHistory(logEntry);
    
    if (this.enableConsole) {
      console.debug(`[DEBUG] ${message}`, data || '');
    }
  }

  getLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
  }

  // Method to send logs to external service (implement as needed)
  sendToLoggingService(logEntry) {
    // Example: send to external logging service
    // fetch('/api/logs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(logEntry)
    // }).catch(err => console.error('Failed to send log:', err));
  }

  // Performance logging
  time(label) {
    console.time(label);
  }

  timeEnd(label) {
    console.timeEnd(label);
  }

  // API request logging
  logApiRequest(method, url, data = null) {
    this.debug(`API Request: ${method} ${url}`, data);
  }

  logApiResponse(method, url, status, data = null) {
    const message = `API Response: ${method} ${url} - ${status}`;
    
    if (status >= 400) {
      this.error(message, data);
    } else {
      this.debug(message, data);
    }
  }

  // User action logging
  logUserAction(action, data = null) {
    this.info(`User Action: ${action}`, data);
  }
}

// Create singleton instance
const logger = new Logger();

// Export both the instance and the class
export default logger;
export { Logger, LOG_LEVELS };