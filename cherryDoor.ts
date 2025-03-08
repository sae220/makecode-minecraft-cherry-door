namespace agent {
    //% group="Inventory" weight=164
    //% blockId=minecraftAgentSetAndesiteStairs block="エージェントに安山岩の階段を$count個、自分のスロット$slot番に設定させる"
    //% slot.defl=1 slot.min=1 slot.max=27
    //% count.defl=1 count.min=1 count.max=64
    export function setAndesiteStairs(count: number, slot: number): void {
        player.execute(`replaceitem entity @c slot.inventory ${slot - 1} polished_andesite_stairs ${count}`);
    }
}
