import React, { Component } from 'react';
import Episode from './Episode';

class SelectedShowContainer extends Component {

  state = {
    selectedSeason: 1,
  }

  mapSeasons = () => {
    if (!!this.props.allEpisodes){
      let seasons = this.props.allEpisodes.map((e) => e.season)
      let uniqueSeason = []
      for (let i = 0; i < seasons.length; i++) {
        if(!uniqueSeason.includes(seasons[i])) {
          uniqueSeason.push(seasons[i])
        }
      }
      return uniqueSeason.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  mapEpisodes = season => {
    return this.props.allEpisodes.filter(e => parseInt(e.season, 10) === parseInt(season, 10)).map(e => <Episode eachEpisode={e} key={e.id} />)
  }

  handleSelectionChange = (e) => {
    this.setState({ selectedSeason: e.target.value })
  }


  render() {
    const { selectedShow } = this.props

    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={this.handleSelectionChange}>
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes(this.state.selectedSeason)}
      </div>
    );
  }

}

export default SelectedShowContainer;


Array.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if(!arr.includes(this[i])) {
        arr.push(this[i]);
    }
  }
  return arr;
}
