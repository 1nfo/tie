// Copyright 2017 The TIE Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Basic configuration for the TIE application.
 */

window.globalData = {
  // Question data will be stored here, keyed by question ID.
  // Questions are instantiated in assets/questions, and they add themselves
  // to this dictionary when they're instantiated.
  questions: {},
  // Question set data will be stored here, keyed by question set ID.
  questionSets: {}
};

window.tie = angular.module('tie', ['ui.codemirror']);

// The maximum amount of time (in seconds) that the code can take to run.
tie.constant('CODE_EXECUTION_TIMEOUT_SECONDS', 3);

// Supported languages.
tie.constant('LANGUAGE_PYTHON', 'python');
tie.constant('ALL_SUPPORTED_LANGUAGES', ['python']);

// Class name for wrapping student code. Answer submissions are then run
// using CLASS_NAME_STUDENT_CODE.function_name().
tie.constant('CLASS_NAME_STUDENT_CODE', 'StudentCode');
// Class name for wrapping auxiliary code. Answer submissions are then run
// using CLASS_NAME_STUDENT_CODE.function_name().
tie.constant('CLASS_NAME_AUXILIARY_CODE', 'AuxiliaryCode');

// Imports and system-level functions that should be appended to all code.
tie.constant('SYSTEM_CODE', {
  python: [
    'import copy',
    'import time',
    '',
    '# A copy of the most-recently processed input item. This is useful',
    '# for debugging exceptions.',
    'most_recent_input = None',
    '',
    'class System(object):',
    '    @classmethod',
    '    def runTest(cls, func, input):',
    '        global most_recent_input',
    '        most_recent_input = copy.deepcopy(input)',
    '        output = func(input)',
    '        return output',
    '',
    '    @classmethod',
    '    def extendString(cls, s, length):',
    '        return s * length',
    ''
  ].join('\n')
});

// Name of the list in which correctness test results are stored.
tie.constant('VARNAME_CORRECTNESS_TEST_RESULTS', 'correctness_test_results');
// Name of the list in which buggy output test results are stored.
tie.constant('VARNAME_BUGGY_OUTPUT_TEST_RESULTS', 'buggy_output_test_results');
// Name of the list in which performance test results are stored.
tie.constant('VARNAME_PERFORMANCE_TEST_RESULTS', 'performance_test_results');
// Name of the variable in which a copy of the most recent input is stored.
tie.constant('VARNAME_MOST_RECENT_INPUT', 'most_recent_input');
// Default auto save time in seconds.
tie.constant('DEFAULT_AUTO_SAVE_SECONDS', 3);
