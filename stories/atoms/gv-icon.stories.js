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
import '../../src/atoms/gv-icon.js';
import notes from '../../.docs/gv-icon.md';
import { storiesOf } from '@storybook/html';

storiesOf('Components.Atoms', module)
  .addParameters({ notes })
  .add('<gv-icon>', () => {
    return `
<div class="title">Size 24px (default)</div>
<gv-icon shape="wheather:thunder-night"></gv-icon>
<gv-icon shape="wheather:thunder" style="--gv-icon:#ff725c;"></gv-icon>
<gv-icon shape="wheather:umbrella" style="--gv-icon:#ffb700;"></gv-icon>
<gv-icon shape="wheather:windy" style="--gv-icon:#357edd;"></gv-icon>

<div class="title">Size: 36px</div>
<gv-icon shape="wheather:thunder-night" size="36"  style="--gv-icon:#ff725c;"></gv-icon>
<gv-icon shape="wheather:thunder" size="36" style="--gv-icon:#357edd;"></gv-icon>
<gv-icon shape="wheather:umbrella" size="36"></gv-icon>
<gv-icon shape="wheather:windy" size="36" style="--gv-icon:#ffb700;"></gv-icon>

<div class="title">Size: 48px</div>
<gv-icon shape="wheather:thunder-night" size="48"></gv-icon>
<gv-icon shape="wheather:thunder" size="48" style="--gv-icon:#ffb700;"></gv-icon>
<gv-icon shape="wheather:umbrella" size="48" style="--gv-icon:#357edd;"></gv-icon>
<gv-icon shape="wheather:windy" size="48"></gv-icon>

<div class="title">Size: 96px</div>
<gv-icon shape="wheather:thunder-night" size="96" style="--gv-icon:#ffb700;"></gv-icon>
<gv-icon shape="wheather:thunder" size="96" style="--gv-icon:#ff725c;"></gv-icon>
<gv-icon shape="wheather:umbrella" size="96"></gv-icon>
<gv-icon shape="wheather:windy" size="96" style="--gv-icon:#357edd;"></gv-icon>
`;
  });