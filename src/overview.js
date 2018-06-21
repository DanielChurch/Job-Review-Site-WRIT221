import React, { Component } from 'react'
import { Box, Columns, Column } from './components/components';

class Overview extends Component {
  render() {
    return (
    <div>
      <Columns>
        <Column size='is-8'>
          <Box>
            <div className='title'>Overview</div>
          </Box>
          <Columns>
          	<Column size='is-8'>
          		<Box>
          			<nav class="level">
          				<div class="level-left">
          					<div class="level-item">
          						<div className='subtitle'>Welcome Guide</div>
          					</div>
          				</div>
          				  <div class="level-right">
          				  	<div class="level-item">
          						<span class="tag is-success is-large is-rounded">Beginner</span>
          					</div>
          				</div>
          			</nav>
          		</Box>
          		<Box>
          			<div class="container">
				        <section class="articles">
				            <div class="column is-8">
				                <div class="card article">
				                    <div class="card-content">
				                        <div class="media">
				                            <div class="media-content has-text-centered">
				                                <p class="title article-title">Introducing a guide for new visitors!</p>
				                                <div class="tags has-addons level-item">
				                                    <span class="tag is-rounded is-info">@nathan</span>
				                                    <span class="tag is-rounded">June 20, 2018</span>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="content article-body">
				                            <p>Welcome to our job review site! Here, you can easily search for jobs and their salaries. You can also see
				                            real employee reviews and photos of the company, so you can make sure you want to work there! </p>
				                            <p>First, feel free to stay on this page and look at the various guides! Over time, more and more
				                            will be added, so be sure to check back later for more! To start using the site, visit the salaries
				                        	tab. This will be the main area for your job search.</p>
				                            <h3 class="has-text-centered">Make sure to login to our website!</h3>
				                            <p> Take full advantage of what this website has to offer by logging in! In order to view an unlimited
				                            amount of jobs and their detailed information, you are required to contribute! At the top right, sign
				                        	into your google account to get started. Then, feel free to share with others (anonymously) your job
				                     		review, salary information, and photos!</p>
				                     		<br/>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </section>
				    </div>
          		</Box>
        	</Column>
        	<Column size='is-8'>
          		<Box>
          			<nav class="level">
          				<div class="level-left">
          					<div class="level-item">
          						<div className='subtitle'>Steps to a Successful Job Search</div>
          					</div>
          				</div>
          				  <div class="level-right">
          				  	<div class="level-item">
          						<span class="tag is-warning is-large is-rounded">Intermediate</span>
          					</div>
          				</div>
          			</nav>
          		</Box>
          		<Box>
          			<div class="container">
				        <section class="articles">
				            <div class="column is-8">
				                <div class="card article">
				                    <div class="card-content">
				                        <div class="media">
				                            <div class="media-content has-text-centered">
				                                <p class="title article-title">Familiar with our site? This guide is for you!</p>
				                                <div class="tags has-addons level-item">
				                                    <span class="tag is-rounded is-info">@nathan</span>
				                                    <span class="tag is-rounded">June 21, 2018</span>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="content article-body">
				                            <p>During your job search, it is important that you do not waste time! The job market is very competitive,
				                            and you need to do your best to make a decision on where you want to work as fast as possible. This guide will
				                        	help you make that choice.</p>
				                            <p>Firstly, if you are already employed and want a new job, what you can easily do here is compare jobs.
				                            See the difference between average salaires, positions and reviews.</p>
				                            <h3 class="has-text-centered">Make the right decision the first time.</h3>
				                            <p>Make sure you look at all aspects of a job before considering to apply. Reviews or salary information
				                            alone should not make your decision for you! Look at the photos. Are you more comfortable working in an
				                        	open setting like Google, where it may be a more Agile-friendly environment, OR do you want a standard
				                        	cubicle job that may be more restricted but straight-forward? Make sure you are happy with everything
				                        	a job has to offer. If you are not happy where you work, you are bound to underperform.</p>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </section>
				    </div>
          		</Box>
        	</Column>
          </Columns>
        </Column>
        <Column>
        </Column>
      </Columns>
	</div>
    );
  }
}

export default Overview;