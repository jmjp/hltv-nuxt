<template>
    <div class="mx-auto mt-52 w-3/4">
        <SearchBox />
        <div class="flex flex-wrap mt-4 items-center justify-center">
            <IndexCard v-for="player in players" :title="player.name" :path="`/players/${player.name}`">
                <img class="transition duration-500 hover:scale-105 hover:-translate-y-1" :src="player.img" />
            </IndexCard>
        </div>
    </div>
</template>


<script setup lang="ts">
import IndexCard from "./components/indexCard.vue";
import SearchBox from "./components/searchBox.vue";

const players: PlayerLink[] = [
    { name: "fallen", img: "https://img-cdn.hltv.org/playerbodyshot/Dygd2WfFl-F6yR_47baJcT.png?ixlib=java-2.1.0&w=400&s=f5bb2e1d71042e5ce043f129a5941264" },
    { name: "coldzera", img: "https://img-cdn.hltv.org/playerbodyshot/7gJL_LHILUk9b93DFpa7Ki.png?ixlib=java-2.1.0&w=400&s=730734713a117a1b931a2b9f6c91247d" },
    { name: "taco", img: "https://img-cdn.hltv.org/playerbodyshot/oVlLgpSsMu8ZBc-iAWuzZ3.png?ixlib=java-2.1.0&w=400&s=659b623b8c8db35d0da44880ef08dd7f" },
    { name: "fer", img: "https://img-cdn.hltv.org/playerbodyshot/0wByIKmMndjpZZS9V6_485.png?ixlib=java-2.1.0&w=400&s=c405eb54d75015b10b2dca87231b04b6" },
    { name: "boltz", img: "https://img-cdn.hltv.org/playerbodyshot/QIaoeHHlrC7MXCuRPxPMN7.png?ixlib=java-2.1.0&w=400&s=6d80fed5f7da6b99978bbe62529db730" },
    { name: "s1mple", img: "https://img-cdn.hltv.org/playerbodyshot/Q2u6AgnDNYQ3dyObwN4JBX.png?ixlib=java-2.1.0&w=400&s=5e19fa63867872bd78409f6e757ff6c3" },
    { name: "zywoo", img: "https://img-cdn.hltv.org/playerbodyshot/R3MF_lTsMVSw1w6K744i91.png?ixlib=java-2.1.0&w=400&s=00f5abe7c10a1cb7ba784147d0ac00cf" }
]

</script>