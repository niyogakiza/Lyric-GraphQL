import React,{Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';


import FetchSongList from '../queries/fetchSongList';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';


class SongDetail extends Component{


    render(){

        const { song } = this.props.data;

        if(!song) { return <div>Loading....</div>;}

        return(
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <LyricCreate songId={this.props.params.id}/>
                <LyricList lyrics={song.lyrics}/>
            </div>
        );
    }
}

export default graphql(FetchSongList, {
    options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetail);