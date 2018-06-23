import React, { Component, createRef } from "react";

import {
  Box,
  Button,
  Column,
  Columns,
  Icon,
  Modal,
  SearchInput
} from "../components/components";

import CompanyStatBox from "./company_stat_box";
import Posts from "./posts";
import Positions from "./positions";

import {
  getCompanyInfoFromJobTitle,
  getCompanyInformation,
  getCompanyInformationFromLocation,
  getCompanyList,
  getJobPositions,
  getLocationList,
  saveReview,
} from "../server";

import "./salaries.css";

const defaultState = {
  companies: [],
  companyText: "",
  jobTitle: "",
  modal: null,
  companyInfo: null,
};

class Salaries extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
    this.locationSearchRef = createRef();
    this.companySearchRef = createRef();
    this.jobTitleSearchRef = createRef();
  }

  async componentDidMount() {
    let list = await getCompanyList();
    let locations = await getLocationList();
    let jobTitles = await getJobPositions();

    this.setState({
      companies: list,
      locations: locations,
      jobTitles: jobTitles
    });
  }

  closeModal = () => this.setState({ modal: null });

  async openModal(result, title) {
    if (result.length === 1) {
      const item = result[0];
      let info = await getCompanyInformation(item.name, item.location);

      this.setState({ companyInfo: info });
    } else {
      const renderItems = () => {
        return result.map(item => (
          <tr
            onClick={async () => {
              let info = await getCompanyInformation(item.name, item.location);

              this.setState({ companyInfo: info });
              this.closeModal();
            }}
          >
            <td> {item.name} </td>
            <td> {item.location} </td>
          </tr>
        ));
      };

      this.setState({
        modal: (
          <Modal
            title={title}
            onExitClicked={() => this.closeModal()}
            footerContent={
              <Button onClick={() => this.closeModal()}> Close </Button>
            }
          >
            <table
              className="table is-striped is-hoverable"
              style={{ margin: "auto" }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>{renderItems()}</tbody>
            </table>
          </Modal>
        )
      });
    }
  }

  renderSearchByJobTitleBox() {
    return (
      <Box>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <SearchInput
              items={this.state.jobTitles}
              placeholder="Search for Job Position"
              onChange={value => this.setState({ jobTitle: value })}
              ref={ref => (this.jobTitleSearchRef = ref)}
            />
            <Icon glyph="fas fa-search" size="is-small" isRight={false} />
            <Icon glyph="fas fa-check" size="is-small" isRight={true} />
          </p>
        </div>
        <Button
          style={{ width: "100%" }}
          onClick={async () => {
            let result = await getCompanyInfoFromJobTitle(this.state.jobTitle);

            await this.openModal(
              result,
              `Search results for position: ${this.state.jobTitle}`
            );

            if (this.jobTitleSearchRef) {
              this.jobTitleSearchRef.resetValue();
            }
          }}
        >
          <Icon glyph="fas fa-search" />
          <span> Search by Job Position </span>
        </Button>
      </Box>
    );
  }

  renderSearchByCompanyBox() {
    return (
      <Box>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <SearchInput
              items={this.state.companies}
              placeholder="Search for Company"
              onChange={value => this.setState({ companyText: value })}
              ref={ref => (this.companySearchRef = ref)}
            />
            <Icon glyph="fab fa-envira" size="is-small" isRight={false} />
            <Icon glyph="fas fa-check" size="is-small" isRight={true} />
          </p>
        </div>
        <Button
          style={{ width: "100%" }}
          onClick={async () => {
            let result = await getCompanyInformation(this.state.companyText);

            await this.openModal(
              result,
              `Search results for company: ${this.state.companyText}`
            );

            if (this.companySearchRef) {
              this.companySearchRef.resetValue();
            }
          }}
        >
          <Icon glyph="fas fa-search" />
          <span> Search by Company </span>
        </Button>
      </Box>
    );
  }

  renderSearchByLocationBox() {
    return (
      <Box>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <SearchInput
              items={this.state.locations}
              placeholder="Search by location"
              onChange={value => this.setState({ companyLocation: value })}
              ref={el => (this.locationSearchRef = el)}
            />
            <Icon
              glyph="fas fa-location-arrow"
              isRight={false}
              size="is-small"
            />
            <Icon glyph="fas fa-check" isRight={true} size="is-small" />
          </p>
        </div>
        <Button
          style={{ width: "100%" }}
          onClick={async () => {
            let result = await getCompanyInformationFromLocation(
              this.state.companyLocation
            );

            await this.openModal(
              result,
              `Search results for location: ${this.state.companyLocation}`
            );

            if (this.locationSearchRef) {
              this.locationSearchRef.resetValue();
            }
          }}
        >
          <Icon glyph="fas fa-search" />
          <span> Search by Location </span>
        </Button>
      </Box>
    );
  }

  renderSearchBoxes() {
    return (
      <Columns>
        <Column>{this.renderSearchByJobTitleBox()}</Column>
        <Column>{this.renderSearchByCompanyBox()}</Column>
        <Column>{this.renderSearchByLocationBox()}</Column>
      </Columns>
    );
  }

  renderCompanyPositions = () => (
    <Positions positions={this.state.companyInfo.positions} />
  );

  async saveReview(text, name, icon, email) {
    try {
      await saveReview(this.state.companyInfo.name, this.state.companyInfo.location, text, name, Date.now(), 0, icon, email);
    } catch (e) {}

    let info = await getCompanyInformation(this.state.companyInfo.name, this.state.companyInfo.location);

    this.setState({ companyInfo: info });
  }

  renderCompanyInfo() {
    console.log(this.state.companyInfo.reviews);
    return (
      <Box>
        <CompanyStatBox
          name={this.state.companyInfo.name}
          salary={this.state.companyInfo.salary}
        />
        <Posts
          reviews={this.state.companyInfo.reviews}
          onSubmitReview={ (text, name, icon, email) => this.saveReview(text, name, icon, email) }
        />
      </Box>
    );
  }

  renderLogo() {
    if (this.state.companyInfo.logo) {
      return (
        <img style={{ height: "163px" }} src={this.state.companyInfo.logo} />
      );
    } else {
      return (
        <img style={{ height: "163px" }} src={require("../msu_logo.png")} />
      );
    }
  }

  render() {
    console.log(this.state.companyInfo);
    if (this.state.companyInfo != null) {
      return (
        <Columns>
          <Column size="is-8">
            <Box>
              <div className="title">Salaries</div>
            </Box>
            <Box>
              <div className="has-text-centered">{this.renderLogo()}</div>
              <hr />
              <p> {this.state.companyInfo.description} </p>
            </Box>
            {this.renderSearchBoxes()}
            {this.renderCompanyPositions()}
          </Column>
          <Column>{this.renderCompanyInfo()}</Column>
          {this.state.modal}
        </Columns>
      );
    } else {
      return (
        <div>
          <Columns>
            <Column size="is-8">
              <Box>
                <div className="title">Salaries</div>
              </Box>
            </Column>
            <Column></Column>
          </Columns>
          <div style={{ height: '30vh' }}></div>
          <Columns>
            <Column size='is-2'></Column>
            <Column size='is-8'>
              {this.renderSearchBoxes()}
            </Column>
            <Column size='is-2'></Column>
          </Columns>
          {this.state.modal}
        </div>
      );
    }
  }
}

export default Salaries;
