import React from "react";
import List from "../List/List";
import Modal from "../Modal/Modal";
import "../Gallery/Gallery.css";


class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hits : null,
            modal : null
        };
        this.closeModal = this.closeModal.bind(this);
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            let {value} = this.props;
            
    
            fetch(`https://pixabay.com/api/?key=22086651-33a3bf4bb622774112cfd2d08&q=${value}&image_type=photo`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.setState(()=> {
                        return {
                            hits: data.hits
                        }
                    })
                })
          }
    }

    openModal(props) {
        this.setState(()=> {
            return {
                modal: props
            };
        });
    }

    closeModal() {
        this.setState(()=> {
            return {
                modal: null
            };
        });
        
    }

    render() {

        let modal = (this.state.modal !== null) ? <Modal image={this.state.modal} close={this.closeModal}/> : null;
        let photos = "";

        if(this.state.hits === null) {
            photos = "Nothing to show";
        } else {
            if (this.state.hits.length <= 0) {
                photos = `Sorry, no results for "${this.props.value}"`;
            } else {
                    photos = this.state.hits.map((item) => {
                       return (
                           <div key={item.id} className="gallery__item">
                               <List 
                                   image = {item.previewURL}
                                   openModal = {()=> this.openModal(item.webformatURL)}
                               />
                           </div>
                       )
                   })
            }
        }
        return (
            <div className="gallery">
                {photos}
                {modal}
            </div>
        )
        
    }
}

export default Gallery;