<template>
  <v-container class="ma-1 pa-1 elevation-1">
      <v-layout wrap >
      	<v-flex xs12 sm12 md4 lg4 xl4 justify-center align-center>
      		<v-card flat>
		        <v-card-title>
		             <carousel-component>
					    <carousel-item>
					      <article class="demo-area ">
							  <img class="demo-trigger" src="http://localhost/estoreapi/public/images/uploads/67.jpg?w=200&ch=DPR&dpr=2&border=1,ddd" data-zoom="http://localhost/estoreapi/public/images/uploads/67.jpg?w=1000&ch=DPR&dpr=2" >
							  
							</article>
					    </carousel-item>
					    <carousel-item>
					      <article class="demo-area">
							  <img class="demo-trigger " src="http://localhost/estoreapi/public/images/uploads/13.jpg?w=200&ch=DPR&dpr=2&border=1,ddd" data-zoom="http://localhost/estoreapi/public/images/uploads/13.jpg?w=1000&ch=DPR&dpr=2" >
							</article>
					    </carousel-item>
					    <carousel-item>
					      <h2>#3</h2>
					      <img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="">
					    </carousel-item>
					    <carousel-item>
					      <h2>#4</h2>
					      <img src="https://octodex.github.com/images/adventure-cat.png" alt="">
					    </carousel-item>
					  </carousel-component>
					

					
		        </v-card-title>
		        <v-card-actions>
		          <v-btn flat color="orange">Share</v-btn>
		          <v-btn flat color="orange">Explore</v-btn>
		        </v-card-actions>
		      </v-card>
      	</v-flex>
      	<v-flex xs12 sm12 md8 lg8 xl8>
      		<div class="detail">
				   <section>
				      <h3> <span>{{ item.short_desc }}</span><br></h3>
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
  display: inline;
  padding:10px;
  

}

.demo-trigger {
  display: inline-block;
  width: 100%;
  float: left;
}

.detail {
  position: relative;
  width: 100%;
  float: left;
  background: white;
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


/*Carousel */
.carousel-component {
  position: relative;
  overflow: hidden;
}

.carousel-page {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.5s;
  padding: 10px;

  h2 {
    margin: 0;
  }

  img {
    width: 300px;
  }
}

.carousel-page.active {
  visibility: visible;
  position: static;
}

.carousel-nav-prev,
.carousel-nav-next {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  display: block;
  width: 50px;
  height: 50px;
  border: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #FFF;
  cursor: pointer;
}

.carousel-nav-prev {
  left: 5px;
}

.carousel-nav-next {
  right: 5px;
}

</style>