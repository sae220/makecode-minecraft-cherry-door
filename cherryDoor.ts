namespace agent {
    //% group="Inventory" weight=164
    //% blockId=minecraftAgentSetCherryDoor block="agent set cherry door|count $count|in slot $slot"
    //% slot.defl=1 slot.min=1 slot.max=27
    //% count.defl=1 count.min=1 count.max=64
    export function setCherryDoor(count: number, slot: number): void {
        player.execute(`replaceitem entity @c slot.inventory ${slot - 1} cherry_door ${count}`);
    }
}
