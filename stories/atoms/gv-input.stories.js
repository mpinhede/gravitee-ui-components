/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import '../../src/atoms/gv-input.js';
import notes from '../../.docs/gv-input.md';
import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import { updateTextAttributes } from '../lib/update-attributes';
import { withCustomEventActions } from '../lib/event-action';

const withActions = withCustomEventActions('gv-input:input');

storiesOf('Components.Atoms', module)
  .addParameters({ notes })
  .add('<gv-input>', withActions(() => {

    const label = text('Label', '');

    const container = document.createElement('div');
    container.innerHTML = `
      <div class="title">Type</div>
      <gv-input placeholder="Text (default)"></gv-input>
      <gv-input placeholder="Text" icon="general:search"></gv-input>
      <gv-input type="password" placeholder="Password"></gv-input>
      <gv-input placeholder="Password icon" icon="general:shield-protected"></gv-input>
      <gv-input type="email" placeholder="Email"></gv-input>
      <gv-input placeholder="Email icon" icon="communication:mail-@"></gv-input>
      
      
      <div class="title">Size</div>
      <gv-input placeholder="Medium (default)"></gv-input>
      <gv-input placeholder="Medium icon" icon="general:size"></gv-input>
      <gv-input large placeholder="Large"></gv-input>
      <gv-input large placeholder="Large icon" icon="general:size"></gv-input>
      <gv-input small placeholder="Small" ></gv-input>
      <gv-input small placeholder="Small icon" icon="general:size"></gv-input>
    
      <div class="title">Disabled</div>
      <gv-input placeholder="Medium" disabled></gv-input>
      <gv-input placeholder="Medium icon" disabled icon="general:shield-disabled"></gv-input>
      <gv-input type="password" large placeholder="Large password" disabled></gv-input>
      <gv-input type="password" large placeholder="Large password" disabled icon="general:shield-disabled"></gv-input>
      <gv-input type="email" small label="Small email" disabled></gv-input>
      <gv-input type="email" small label="Small email" disabled icon="general:shield-disabled"></gv-input>

      <div class="title">Required</div>
      <gv-input placeholder="Medium text" required></gv-input>
      <gv-input placeholder="Medium text" required icon="communication:shield-thunder"></gv-input>
      <gv-input placeholder="Large password" type="password" large required></gv-input>
      <gv-input placeholder="Large password" type="password" large required icon="communication:shield-thunder"></gv-input>
      <gv-input type="email" label="Small email" small required title="Add your email"></gv-input>
      <gv-input type="email" label="Small email" small required icon="communication:shield-thunder"></gv-input>

      <div class="title">Skeleton</div>
      <gv-input placeholder="Medium text" skeleton></gv-input>
      <gv-input label="Medium text"  placeholder="Medium text" skeleton icon="code:loading"></gv-input>
      <gv-input label="Large password" placeholder="Large password"  large skeleton></gv-input>
      <gv-input placeholder="Large password"  large skeleton icon="navigation:waiting"></gv-input>
      <gv-input small skeleton disabled required></gv-input>
      <gv-input label="Small required & disabled email" small skeleton disabled required icon="navigation:waiting"></gv-input>
    `;

    const nodeList = container.querySelectorAll('gv-input');
    if (label) {
      updateTextAttributes(nodeList, 'label', label);
    }

    return container;
  }));