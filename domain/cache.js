class Cache {

    constructor(size) {
        this.size = size;
        this.cache = new Map();
    }

    has(key) {
        return this.cache.has(key);
    }

    getData(key) {
        return this.cache.get(key);
    }

    addData(key, value) {
        if (this.cache.size === this.size) {
            this.cache.delete( this.cache.keys().next().value );
        }

        this.cache.set(key, value);
    }

    updateData(key, value) {
        this.cache.set(key, value);
    }

    clear() {
        this.cache = new Map();
    }

    changeSize(newSize) {   
        if (this.cache.size > newSize) {
            const iterator = this.cache.keys();
            let count = this.cache.size - newSize;

            while (count > 0) {
                this.cache.delete(iterator.next().value);
                count--;
            }
        }

        this.size = newSize;
    }
}

const cache = new Cache(2);

module.exports = cache;