<template>
  <v-container class="ma-1 pa-1">
      <v-layout wrap >
      	<v-flex xs12 sm12 md5 lg5 xl5 justify-center align-center>
      		<v-card>
		        <v-card-title>
		        <div style="width: 60%">
		            <ProductZoomer
		              :base-images="images"
		              :base-zoomer-options="zoomerOptions"
		            />
		          </div>
		        </v-card-title>
		        <v-card-title>
		          <div>
		            <span>{{ item.short_desc }}</span><br>
		            <span>Whitsunday Island, Whitsunday Islands</span>
		          </div>
		        </v-card-title>
		        <v-card-actions>
		          <v-btn flat color="orange">Share</v-btn>
		          <v-btn flat color="orange">Explore</v-btn>
		        </v-card-actions>
		      </v-card>
      	</v-flex>
      	<v-flex xs12 sm12 md6 lg6 xl6>
      		<v-card>
      			<v-card-title>
      			<h2 class="title">{{ item.name }}</h2>
      			</v-card-title>
		        <v-card-title>
		        
		        </v-card-title>
		        <v-card-title>
		          <div>
		            <span>{{ item.short_desc }}</span><br>
		            <span>Whitsunday Island, Whitsunday Islands</span>
		          </div>
		        </v-card-title>
		        <v-card-actions>
		          <v-btn flat color="orange">Share</v-btn>
		          <v-btn flat color="orange">Explore</v-btn>
		        </v-card-actions>
		      </v-card>
      	</v-flex>
      </v-layout>
  </v-container>
</template>

<script type="text/javascript">
  
  export default{
  	data () {
    return {
     'zoomerOptions': {
        'zoomFactor': 3,
        'pane': 'pane',
        'hoverDelay': 300,
        'namespace': 'zoomer',
        'move_by_click':false,
        'scroll_items': 7,
        'choosed_thumb_border_color': "#dd2c00"
      },
      'images': {
          'thumbs': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/7.jpeg'
            }
          ],
          'normal_size': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/7.jpeg'
            }
          ],
          'large_size': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/7.jpeg'
            }
          ]
      },
      'zoomerOptions': {
        'zoomFactor': 4,
        'pane': 'container',
        'hoverDelay': 300,
        'namespace': 'container-zoomer',
        'move_by_click':true,
        'scroll_items': 2,
        'choosed_thumb_border_color': "#ff3d00"
      }
    }
  },
    middleware: 'item',
    computed: {
    	item(){
    		return this.$store.getters.item
    	}
    }
  }
</script>
