<template>
    <div class="outsideView">
        <button @click="store.goSect()">Return to Sect</button>
        <TileBar />
        <div></div>
            <div class="map">
                <template v-for="(tileRow, y) of mapService.getTiles()" :key="y">
                    <template v-for="(tile, x) of tileRow" :key="x">
                        <TileView
                            :tile="tile"
                            :coords="{x, y}"
                            :selected="mapService.tileSelected(x, y)"
                            @click="clickTile(x, y)"
                        />
                    </template>
                </template>
            </div>
    </div>
</template>

<script setup>
import store from '@/store';
import TileView from '@/outside/TileView.vue';
import TileBar from '@/outside/TileBar.vue';
import { mapService } from '@/outside/mapService';


const clickTile = (x, y) => {
    mapService.selectTile(x, y);
    if (store.getSelectedPerson()
        &&store.getSelectedPerson().location.isTravelling()
        && store.getSelectedPerson().location.inTravelRegion(x, y)
    ) {
        store.getSelectedPerson().location.travelTo(x, y);
    }
}

</script>

<style scoped>
.map {
    display: inline-grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
    justify-self: center;
}

.outsideView {
    vertical-align: top;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 4fr;
    width: 100%;
}
</style>