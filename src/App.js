import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div>
        <div className="App">
          <div className="logo">
            <img src="love-ours.png" alt="title" />
            <div className="ck">CK</div>
          </div>

          <div className="app-title">
            <p>Site Manager</p>
            <br />
            <p className="directories">Directories</p>
            <button className="directories-button">Journal</button>
            <button className="directories-button active">Local Business</button>
            <br />
            <br />
            <p className="directories">Pages</p>
            <button className="pages-button">Home</button>
            <button className="pages-button">About Us</button>
            <button className="pages-button">Advertise with Us</button>
            <button className="pages-button">FAQ</button>
            <button className="pages-button">Privacy</button>
            <button className="pages-button">Terms of Use</button>
            <button className="pages-button">Contact</button>
            <button className="pages-button">Add Page</button>
          </div>

          <div className="right-side-header">
            <div className="grid">
              <p>Local Business</p>
              <form>
                <input type="search" placeholder="Search"></input>
              </form>
              <div className="setting">
                <span>a</span>
              </div>
              <div className="box1">
                <span>+</span>
              </div>
              <div className="box2">
                <span>a</span>
              </div>
            </div>
            <div className="list">
              <a className="active">Listings</a>
              <a>Categories</a>
              <a>Custom Fields</a>
            </div>

            <div className="empty"></div>

            <div className="message">
              <div className="message-header">
                <a>Business</a>
                <a>Status/Modified</a>
                <a>Stats</a>
              </div>
              
              <div className="message-body">
                <div className="business">
                  <div><img src="luffy.jpg" /></div>
                  <div className="name">
                    <div className="super">Anchor Oyster Bar</div>
                    <p className="subscript">Seafood, +3</p>
                  </div>
                </div>
                <div className="status">
                  <div className="draft">Draft</div>
                  <p className="subscript">3 hours ago</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">101 reviews</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total views</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total actions</p>
                </div>
                <div>
                  <button className="actions">...</button>
                </div>
              </div>

              <div className="message-body active">
                <div className="business">
                  <div><img src="luffy.jpg" /></div>
                  <div className="name">
                    <div className="super">Starbucks Coffee</div>
                    <p className="subscript">Coffee & Tea, +3</p>
                  </div>
                </div>
                <div className="status">
                  <div className="published">Published</div>
                  <p className="subscript">13/6/2017 8:23PM</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">689 reviews</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total views</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total actions</p>
                </div>
                <div>
                  <button className="actions active">...</button>
                </div>
              </div>

              <div className="message-body">
                <div className="business">
                  <div><img src="luffy.jpg" /></div>
                  <div className="name">
                    <div className="super">Kokkario Estiatorio</div>
                    <p className="subscript">Greek, Meditteranean, +2</p>
                  </div>
                </div>
                <div className="status">
                  <div className="published">Published</div>
                  <p className="subscript">16/2/2017 8:23PM</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">381 reviews</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total views</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total actions</p>
                </div>
                <div>
                  <button className="actions">...</button>
                </div>
              </div>

              <div className="message-body">
                <div className="business">
                  <div><img src="luffy.jpg" /></div>
                  <div className="name">
                    <div className="super">Krispy Kreme</div>
                    <p className="subscript">Doughnuts, Coffee & Tea, +3</p>
                  </div>
                </div>
                <div className="status">
                  <div className="published">Published</div>
                  <p className="subscript">23/8/2016 8:23PM</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">415 reviews</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total views</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total actions</p>
                </div>
                <div>
                  <button className="actions">...</button>
                </div>
              </div>

              <div className="message-body">
                <div className="business">
                  <div><img src="luffy.jpg" /></div>
                  <div className="name">
                    <div className="super">Eco Smart Landscaping</div>
                    <p className="subscript">Contractors, Landscaping, +3</p>
                  </div>
                </div>
                <div className="status">
                  <div className="published">Published</div>
                  <p className="subscript">23/8/2016 8:23PM</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">415 reviews</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total views</p>
                </div>
                <div>
                  <div className="super">313K</div>
                  <p className="subscript">Total actions</p>
                </div>
                <div>
                  <button className="actions">...</button>
                </div>
              </div>
              
            </div>
            
          </div>

        </div>
      </div>
      
    );
  }
}

export default App;