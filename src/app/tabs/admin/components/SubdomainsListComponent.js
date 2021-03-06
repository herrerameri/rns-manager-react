import React, { Component } from 'react'
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { SubdomainContainer } from '../containers';
import { multilanguage } from 'redux-multilanguage';

class SubdomainsListComponent extends Component {
  componentDidMount () {
    const { loadSubdomains } = this.props;
    loadSubdomains();
  }

  render () {
    const { strings, onAddSubdomain, subdomains, domain } = this.props;

    let input;

    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={e => {
              e.preventDefault();
              onAddSubdomain(input.value);
              input.value = '';
            }}>
              <InputGroup className="mb-3">
                <FormControl type='text' ref={node => (input = node)} placeholder={strings.suggested_subdomains} />
                <InputGroup.Append>
                  <InputGroup.Text>{domain}</InputGroup.Text>
                </InputGroup.Append>
                <InputGroup.Append>
                  <Button type="submit" size='sm'>+</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              {subdomains.map(subdomain => <SubdomainContainer key={subdomain} label={subdomain} />)}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default multilanguage(SubdomainsListComponent);
