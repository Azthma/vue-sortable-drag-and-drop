<template>
  <v-app id="inspire">

    <v-app-bar app>
      <v-toolbar-title>Vue Functions</v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <v-container class="mt-5">
        <div class="text-h4 text-center mb-2 mt-8">Sortable</div>
        <v-sheet class="pa-5 grey darken-5" tile>
            <v-row 
                v-draggable="{ value: sort_items }"
                @start="onDragStart"
                @end="onDragEnd"
                @change="onChange"
            >
                <v-col
                    v-for="item in sort_items" :key="item.id"
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
        
        <div class="text-h4 text-center mb-2 mt-16">Drag And Drop</div>
        <v-sheet class="pa-5 grey darken-5"
            tile
            @drop="onDrop($event, 1)"
            @dragover.prevent
            @dragenter.prevent
        >
            <v-row>
                <v-col
                    v-for="item in listOne"
                    :key="item.id"
                    cols="2"
                    draggable
                    @dragstart="startDrag($event, item)"
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
        <v-sheet class="pa-5 mt-5 grey darken-5" 
            tile
            @drop="onDrop($event, 2)"
            @dragover.prevent
            @dragenter.prevent
        >
            <v-row>
                <v-col
                    v-for="item in listTwo"
                    :key="item.id"
                    cols="2"
                    draggable
                    @dragstart="startDrag($event, item)"
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
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
    export default {
        data() {
            return {
                
                sort_items: [
                    {id: 1, name:"item 1", order:1},
                    {id: 2, name:"item 2", order:2},
                    {id: 3, name:"item 3", order:3},
                    {id: 4, name:"item 4", order:4},
                    {id: 5, name:"item 5", order:5},
                    {id: 6, name:"item 6", order:6},
                    {id: 7, name:"item 7", order:7},
                    {id: 8, name:"item 8", order:8},
                    {id: 9, name:"item 9", order:9},
                    {id: 10, name:"item 10", order:10},
                    {id: 11, name:"item 11", order:11},
                    {id: 12, name:"item 12", order:12}
                ],
                items: [
                    {id: 1, name:"item 1", list: 1},
                    {id: 2, name:"item 2", list: 1},
                    {id: 3, name:"item 3", list: 1},
                    {id: 4, name:"item 4", list: 2},
                    {id: 5, name:"item 5", list: 2},
                    {id: 6, name:"item 6", list: 2}
                ]
            }
        },
        computed: {
            listOne () {
                return this.items.filter(item => item.list === 1)
            },
            listTwo () {
                return this.items.filter(item => item.list === 2)
            }
        },
        methods: {
            // sortable
            onDragStart(e) {
                console.log("call from `onDragStart` method", e);
            },
            onDragEnd(e) {
                console.log("call from `onDragEnd` method", e);
            },
            onChange(data) {
                console.log("call from `onDragEnd` method", data);
                let new_item = this.sort_items;
                new_item.map((item) => {
                    let index = this.sort_items.indexOf(item);
                    this.sort_items[index].order = index + 1;
                });
                this.sort_items.map((data) => {
                    console.log("name: ", data.name, " order: ", data.order)
                })
            },
            //drag and drop
            startDrag (evt, item) {
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                evt.dataTransfer.setData('itemID', item.id)
            },
            onDrop (evt, list) {
                const itemID = evt.dataTransfer.getData('itemID')
                const item = this.items.find(item => item.id == itemID)
                item.list = list;
            },
        },
    }
</script>

<style>
.v-draggable__placeholder {
  background: darkred;
}

.handle {
  cursor: grab;
}
</style>