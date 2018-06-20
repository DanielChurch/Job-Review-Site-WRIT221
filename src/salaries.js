import React, { Component } from 'react';
import './salaries.css';
import * as firebase from 'firebase';
import Column from './components/column';
import Columns from './components/columns';
import Box from './components/box';
import Button from './components/button';
import Icon from './components/icon';
import Shell from './shell';

const positions = [
  {
    title: 'Senior Awesome Person',
    salary: '$120,000,000',
    payout: '????????????',
    stockOptions: '????????????',
    benefits: '????????????',
    pto: '????????????',
  },
  {
    title: 'Software Engineer',
    salary: '$90,000',
    payout: '????????????',
    stockOptions: '????????????',
    benefits: '????????????',
    pto: '????????????',
  },
  {
    title: 'Information Technology',
    salary: '$55,000',
    payout: '????????????',
    stockOptions: '????????????',
    benefits: '????????????',
    pto: '????????????',
  },
  {
    title: 'Software Engineering Intern',
    salary: '$40,000',
    payout: '????????????',
    stockOptions: '????????????',
    benefits: '????????????',
    pto: '????????????',
  },
  {
    title: 'Janitor',
    salary: '$5',
    payout: '????????????',
    stockOptions: '????????????',
    benefits: '????????????',
    pto: '????????????',
  },
];

const company = {
  name: 'Company_Name_Here',
  average: '$120,000,000',
  median: '$120,000,000',
  low: '$120,000,000',
  high: '$120,000,000',
};

class Salaries extends Component {
  renderPost(text, user, time, comments) {
    return (
      <article class="post">
        <h4>{text}</h4>
        <div class="media">
          <div class="media-left">
            <p class="image is-32x32">
              <img src="http://bulma.io/images/placeholders/128x128.png"/>
            </p>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <a href="#">{user}</a> reviewed {time} minutes ago &nbsp;
                <span class="tag is-info">Review</span>
              </p>
            </div>
          </div>
          <div class="media-right">
            <span class="has-text-success"><i class="fas fa-thumbs-up"></i> {comments} </span>
          </div>
        </div>
      </article>
    );
  }

  renderSearchBoxes() {
    return (
      <Columns>
        <Column>
          <Box>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" placeholder="Search for Job Position"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <Button style={{width: '100%'}}>
              <Icon glyph='fas fa-search'></Icon>
              <span> Search by Job Position </span>
            </Button>
          </Box>
        </Column>
        <Column>
          <Box>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" placeholder="Search by location"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-location-arrow"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <Button style={{width: '100%'}}>
              <Icon glyph='fas fa-search'></Icon>
              <span> Search by Location </span>
            </Button>
          </Box>
        </Column>
      </Columns>
    );
  }

  renderCompanyStats() {
    return (
      <Box>
        <table className='table is-striped is-hoverable' style={{margin: 'auto'}}>
          <thead>
            <tr>
              <th>Position Title</th>
              <th>Base Pay</th>
              <th>Payout Schedule</th>
              <th>Stock Options</th>
              <th>Benefits</th>
              <th>Payed Time Off</th>
            </tr>
          </thead>
          <tbody>
            {
              positions.map(item => {
                return (
                  <tr>
                    <th>{item.title}</th>
                    <td>{item.salary}</td>
                    <td>{item.payout}</td>
                    <td>{item.stockOptions}</td>
                    <td>{item.benefits}</td>
                    <td>{item.pto}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </Box>
    );
  }

  renderCompanyInfo() {
    return (
      <Box>
        <div className='title has-text-centered'> {company.name} </div>
        <div class="is-ancestor has-text-centered">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <section class="info-tiles">
                <div class="tile is-ancestor has-text-centered">
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">$120k</p>
                      <p class="subtitle">National Average</p>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">$120k</p>
                      <p class="subtitle">National Median</p>
                    </article>
                  </div>
                </div>
                <div class="tile is-ancestor has-text-centered">
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">$5</p>
                      <p class="subtitle">National Minimum</p>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child box">
                      <p class="title">$1,200k</p>
                      <p class="subtitle">National Maximum</p>
                    </article>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>

        <div class="box content">
          {this.renderPost('This place sucks. Don\'t waste your time. They don\'t even have a pool table.', 'Dan', 2, 512)}
          {this.renderPost('This place is the best!!!! Company_Name_Here 4 life!!!', 'Nathan', 15, 511)}
          {this.renderPost('Review 3', 'Sarah', 34, 510)}
          {this.renderPost('Review 4', 'Megan', 50, 509)}
        </div>
      </Box>
    );
  }

  render() {
    return (
      <Columns>
        <Column size='is-8'>
          <Box>
            <div className='title'>Salaries</div>
          </Box>
          <Box>
            <div className='has-text-centered'>
              <img src={require('./msu_logo.png')}/>
            </div>
            <hr/>
            <p>Company Description</p>
          </Box>
          {this.renderSearchBoxes()}
          {this.renderCompanyStats()}
        </Column>
        <Column>
          {this.renderCompanyInfo()}
        </Column>
      </Columns>
    );
  }
}

export default Salaries;