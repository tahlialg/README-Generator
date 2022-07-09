function renderLicenseSection(license) {
  let licenseText = "";
  switch (license) {
    case "MIT":
      licenseText = `Copyright <YEAR> <COPYRIGHT HOLDER>

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
      return licenseText;

    case "Apache":
      licenseText = `Copyright [yyyy] [name of copyright owner]

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      
          http://www.apache.org/licenses/LICENSE-2.0
      
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
      return licenseText;

    case "Mozilla":
      licenseText = `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`;
      return licenseText;

    case "Eclipse":
      licenseText = `THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE (“AGREEMENT”). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`;
      return licenseText;

    case "Unlicensed":
      licenseText = `This is free and unencumbered software released into the public domain.
                    Anyone is free to copy, modify, publish, use, compile, sell, or
                    distribute this software, either in source code form or as a compiled
                    binary, for any purpose, commercial or non-commercial, and by any
                    means.
                    
                    In jurisdictions that recognize copyright laws, the author or authors
                    of this software dedicate any and all copyright interest in the
                    software to the public domain. We make this dedication for the benefit
                    of the public at large and to the detriment of our heirs and
                    successors. We intend this dedication to be an overt act of
                    relinquishment in perpetuity of all present and future rights to this
                    software under copyright law.
                    
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                    OTHER DEALINGS IN THE SOFTWARE.
                    
                    For more information, please refer to <http://unlicense.org/>`;
      return licenseText;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    license,
    description,
    technologies,
    installation,
    usage,
    contribution,
    test,
    github,
    email,
  } = data;

  return `# ${title}
  
  ![License](https://img.shields.io/badge/License-${license}-blue)
 ## Description
    ${description}
 
 ## Built With
   ${technologies}
 
  |  Table of Contents |
  | ----------- |
  | [I Installation.](#installation) |
  | [II Usage.](#usage)|
  | [III License.](#licenses)|
  | [IV Contributing.](#contributing)|
  | [V Tests.](#tests)|
  | [VI Questions.](#questions)|
  ## Installation
  
    ${installation}
  ## Usage
     ${usage}
  
  ## Contributions
    ${contribution}
  ## Tests
  
     ${test}
  
  ## License
  
      This project is using the ${license} license.
  ## Questions
 If you have any questions about this repo please feel free to reach out to me through [GitHub](${github}) or [Email](mailto:${email})
`;
}

// export the function to be used in index.js
module.exports = {
  generateMarkdown,
};
