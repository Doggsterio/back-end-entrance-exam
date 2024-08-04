class Cache {

    constructor(size) {
        this.size = size;
        this.ttl = 60000;
        this.cache = new Map();
    }

    has(key) {
        return this.cache.has(key);
    }

    getData(key) {
        return this.cache.get(key).value;
    }

    addData(key, value) {
        if (this.cache.size === this.size) {
            clearTimeout( this.cache.get(this.cache.keys().next().value).timeout );
            this.cache.delete( this.cache.keys().next().value );
        }

        const timeout = setTimeout(() => {
            this.cache.delete(key);
        }, this.ttl);

        this.cache.set(key, { value, timeout });
    }

    updateData(key, value) {
        clearTimeout(this.cache.get(key).timeout);

        const timeout = setTimeout(() => {
            this.cache.delete(key);
        }, this.ttl);

        this.cache.set(key, { value, timeout });
    }

    clear() {
        this.cache.forEach( (element) => clearTimeout(element.timeout) );
        this.cache.clear();
    }

    changeSize(newSize) {   
        if (this.cache.size > newSize) {
            const iterator = this.cache.keys();
            let count = this.cache.size - newSize;
            let currentElement;

            while (count > 0) {
                currentElement = iterator.next().value;

                clearTimeout( this.cache.get(currentElement).timeout );
                this.cache.delete(iterator.next().value);
                count--;
            }
        }

        this.size = newSize;
    }
}

const cache = new Cache(2);

module.exports = cache;