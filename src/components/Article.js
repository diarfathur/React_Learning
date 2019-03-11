import React, { Component } from 'react';

class Article extends Component {
   render() {
      return (
         <div class="col-md-8 col-12">
            <div class="card p-3">
               <img src={require("../img/side-view.jpg")} class="card-img-top mb-2" alt="" />

               <h3 className=""><p>Belajar React.js dapat Menyebabkan Ke-3
                  Hal Ini</p></h3>
               <small class="text-muted">Diposting pada 29/2/2016</small>
               <small class="text-muted mb-3">oleh Kita Kita</small>
               
               <p class="card-text text-justify">Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.</p>
               <a href="#" class="btn btn-primary">Baca Selengkapnya</a>
            </div>
         </div>
      );
   }
}

export default Article;

