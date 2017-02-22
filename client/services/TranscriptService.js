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

/*
 * @fileoverview Service that maintains a local transcript of the
 * problem-solving session.
 */

tie.factory('TranscriptService', [
  'EventObjectFactory', function(EventObjectFactory) {
    var transcript = [];

    return {
      recordSolution: function(code) {
        transcript.push(EventObjectFactory.createCodeSubmittedEvent(code));
      },
      recordFeedback: function(feedback) {
        transcript.push(EventObjectFactory.createFeedbackGivenEvent(feedback));
      }
    };
  }
]);