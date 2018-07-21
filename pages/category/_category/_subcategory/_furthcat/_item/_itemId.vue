<template>
  <v-container class="ma-1 pa-1">
      <v-layout wrap >
      	<v-flex xs12 sm12 md5 lg5 xl5 justify-center align-center>
      		<v-card>
		        <v-card-title>
				<p>This is a simple description of the dog picture.</p>
		        </v-card-title>
		        <v-card-title>
		          <div>
		            <span>{{ item.short_desc }}</span><br>
		            
					<article class="demo-area">
					  <img class="demo-trigger" src="http://localhost/estoreapi/public/images/uploads/67.jpg?w=200&ch=DPR&dpr=2&border=1,ddd" data-zoom="http://localhost/estoreapi/public/images/uploads/67.jpg?w=1000&ch=DPR&dpr=2" width="400">
					  
					</article>

					<article class="demo-area">
					  <img class="demo-trigger" src="http://localhost/estoreapi/public/images/uploads/5.jpg?w=200&ch=DPR&dpr=2&border=1,ddd" data-zoom="http://localhost/estoreapi/public/images/uploads/5.jpg?w=1000&ch=DPR&dpr=2" width="400">
					  
					</article>
		          </div>
		        </v-card-title>
		        <v-card-actions>
		          <v-btn flat color="orange">Share</v-btn>
		          <v-btn flat color="orange">Explore</v-btn>
		        </v-card-actions>
		      </v-card>
      	</v-flex>
      	<v-flex xs12 sm12 md6 lg6 xl6>
      		<div class="detail">
				   <section>
				      <h3>Men's Watch - Drift Demo</h3>
				      <p>Specifications:</p>
				      <ul>
				        <li>Hover over image</li>
				        <li>35 mm stainless steel case</li>
				        <li>Stainless link bracelet with buckle closure</li>
				        <li>Water resistant to 100m</li>
				      </ul>
				      <h4>$XX.XX <button>Add to Cart</button></h4>
				    </section>
				  </div>
      	</v-flex>
      </v-layout>
  </v-container>
</template>

<script type="text/javascript">
import Drift from 'drift-zoom';
  export default{
  	data () {
    return {
     
    }
  },
    middleware: 'item',
    mounted(){
    	var demoTrigger = document.querySelectorAll('.demo-trigger');
		var paneContainer = document.querySelector('.detail');

    	for (var i = 0, len = demoTrigger.length; i < len; i++) {

		      	new Drift(demoTrigger[i], {
				  paneContainer: paneContainer,
				  inlinePane: false
				});
			}
		
    },
    computed: {
    	item(){
    		return this.$store.getters.item
    	}
    }
  }
</script>

<style type="text/css">
	.demo-area{
  background:$color_invert_fg;
  border-radius:8px;
  padding:10px;
  section{
    padding-top:0;
  }
}

.demo-trigger {
  display: inline-block;
  width: 50%;
  float: left;
}

.detail {
  position: relative;
  width: 100%;
  margin-left: 5%;
  float: left;
  button{
    vertical-align:middle;
    opacity:.5;
    cursor:unset;
    background:$color_invert_chrome_tint;
    margin-left:1em;
  }
}


@media (max-width: 610px) {

  .detail, .demo-trigger {
    float: none;
  }

  .demo-trigger {
    display:block;
    width: 50%;
    max-width:200px;
    margin: 0 auto;
  }

  .detail {
    margin: 0;
    width: auto;
  }

  p {
    margin: 0 auto 1em;
  }

  .responsive-hint {
    display: none;
  }
  h3 {
    margin-top:20px;
  }
}
</style>