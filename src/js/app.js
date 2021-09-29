"use strict"

export function getColorHealth(array) {
    if (array.health > 50) {
        return 'healthy';
    } else if (array.health < 15) {
        return 'critical';
    } else {
        return 'wounded';
    }
}
