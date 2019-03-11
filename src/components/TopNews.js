import React, { Component } from 'react';

class TopNews extends Component {
   render() {
      return (
         <div class="col-md-4 col-12">
            <div class="list-group">
               <a href="#" class="list-group-item list-group-item-action active">
                  <div class="d-flex w-100">
                     <h5 class="mb-1 ">Berita Paling Populer</h5>
                  </div>
               </a>
               <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                     <h5 class="mb-1"><u>Lorem Ipsum</u></h5>
                     <small class="text-muted">13:00</small>
                  </div>
                  <small class="text-muted">Diposting oleh: Kita</small>
               </a>
               <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                     <h5 class="mb-1"><u>Lorem Ipsum</u></h5>
                     <small class="text-muted">14:00</small>
                  </div>
                  <small class="text-muted">Diposting oleh: Kita</small>
               </a>
               <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                     <h5 class="mb-1"><u>Lorem Ipsum</u></h5>
                     <small class="text-muted">14:00</small>
                  </div>
                  <small class="text-muted">Diposting oleh: Kita</small>
               </a><a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                     <h5 class="mb-1"><u>Lorem Ipsum</u></h5>
                     <small class="text-muted">14:00</small>
                  </div>
                  <small class="text-muted">Diposting oleh: Kita</small>
               </a>
            </div>
         </div>
      );
   }
}

export default TopNews;

