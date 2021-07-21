export class Listenable  {
    constructor(initialValue) {
        this._currentValue = initialValue;
        this._willChangeListeners = [];
        this._didChangeListeners = [];
    }
    get value() {
        return this._currentValue;
    }
    set value(newValue) {
        if (this._currentValue != newValue) {
            const oldValue = this._currentValue;
            this._willChangeListeners.forEach(listener => listener(newValue, oldValue));
            this._currentValue = newValue;
            this._didChangeListeners.forEach(listener => listener(newValue, oldValue));
        }
    }
    willChange(listener, callListenerInitially = false) {
        if (!this._willChangeListeners.includes(listener)) {
            this._willChangeListeners.push(listener);
            if (callListenerInitially) listener(this._currentValue, this._currentValue);
        }
        return () => {
            this._willChangeListeners = this._willChangeListeners.filter(
                registeredListener => registeredListener != listener
            );
        };
    };
    didChange(listener, callListenerInitially = false) {
            if (!this._didChangeListeners.includes(listener)) {
            this._didChangeListeners.push(listener);
            if (callListenerInitially) listener(this._currentValue, this._currentValue);
        }
        return () => {
            this._didChangeListeners = this._didChangeListeners.filter(registeredListener => registeredListener != listener);
        };
    };
}
