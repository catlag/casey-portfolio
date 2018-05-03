import ReactDOM from 'react-dom'
import createReactClass from'create-react-class'
import './stylesheets/image.css';
import './stylesheets/illustration.css';
import React, { Component } from 'react';

import SingleImage from './single_image';
import MultiImage from './multi_image';
import Masonry from'masonry-layout';



class Illustration extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {

              var elem = document.querySelector('.grid');
              var msnry = new Masonry( elem, {
                itemSelector: '.grid-item',
                columnWidth: 210

                // use element for option

              });

              var multiGrid = document.querySelector('.multi-grid');

              var msnryMulti = new Masonry( multiGrid, {
                // options
                itemSelector: '.grid-item-multi',
                columnWidth: 200
                
              });

    }


  render() {

    const urls = ['https://picsum.photos/200/300','https://picsum.photos/300/300/?random','https://picsum.photos/200/300/?random','https://picsum.photos/200/300/?random']
    return (
      <div className='images-wrapper grid'>
        <SingleImage class="grid-item single-image" url={'https://picsum.photos/200/300/?random'}/>
        <MultiImage urls={urls}/>
        <SingleImage class="grid-item single-image" url={'https://picsum.photos/200/300/?random'}/>
        <SingleImage class="grid-item single-image" url={'https://picsum.photos/200/300/?random'}/>
        <MultiImage urls={urls}/>
      </div>
    );
  }


}

export default Illustration;