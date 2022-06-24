<template>
  <v-app id="inspire">

    <v-app-bar app>
      <v-toolbar-title>Sortable Test</v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-2">
        <v-sheet class="pa-5 grey darken-5" tile>
            <v-row 
                v-draggable="{ value: items }"
                @start="onDragStart"
                @end="onDragEnd"
                @change="onChange"
            >
                <v-col
                    v-for="item in items" :key="item.id"
                    cols="2"
                >
                    <v-card
                        class="mx-auto"
                        max-width="344"
                    >
                        <v-card-text>
                            <p>ID: {{item.id}}</p>
                            <p class="text-h4 text--primary">
                                {{item.name}}
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        items: [
            {id: 1, name:"item 1", order:1},
            {id: 2, name:"item 2", order:2},
            {id: 3, name:"item 3", order:3},
            {id: 4, name:"item 4", order:4},
            {id: 5, name:"item 5", order:5},
            {id: 6, name:"item 6", order:6}
        ],
    }),
    mounted() {},
    methods: {
        onDragStart(e) {
            console.log("call from `onDragStart` method", e);
        },
        onDragEnd(e) {
            console.log("call from `onDragEnd` method", e);
        },
        onChange(data) {
            console.log("call from `onDragEnd` method", data);
            let new_item = this.items;
            new_item.map((item) => {
                let index = this.items.indexOf(item);
                this.items[index].order = index + 1;
            });
            this.items.map((data) => {
                console.log("name: ", data.name, " order: ", data.order)
            })
        }
    }
};
</script>

<style>
.v-draggable__placeholder {
  background: darkred;
}

.handle {
  cursor: grab;
}
</style>