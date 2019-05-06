import React, { Component } from 'react';
import './style.css'


class MemeGeneratorApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            loading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch("https://api.imgflip.com/get_memes") 
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImgs: memes,
                    loading: false
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const memesList = this.state.allMemeImgs
        const newRandomImg = memesList[Math.floor(Math.random()*memesList.length)]
        const url = newRandomImg.url
        this.setState({randomImg: url})
    }

    render() { 
        return ( 
            <main className="meme-generator-page">
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        onChange={this.handleChange}
                        value={this.state.topText}
                        placeholder="Top Text"
                    />
                    <input
                        type="text"
                        name="bottomText"
                        onChange={this.handleChange}
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                    />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </main>
         );
    }
}
 
export default MemeGeneratorApp;