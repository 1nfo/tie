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
 * A service that saves student code to the browser's localStorage.
 */
tie.factory('CodeStorageService', ['DEFAULT_AUTO_SAVE_SECONDS',
  function(DEFAULT_AUTO_SAVE_SECONDS) {
    var codeStorageService = {};
    var SECONDS_TO_MILLISECONDS = 1000;
    var getObjFromLocalStorage = function(questionId) {
      try {
        return JSON.parse(localStorage.getItem(questionId));
      } catch (e) {
        return null;
      }
    };

    codeStorageService.storeCode = function(questionId, code, language) {
      var storedCode = getObjFromLocalStorage(
        localStorage.getItem(questionId));
      if (!storedCode) {
        storedCode = {};
      }
      storedCode[language] = code;
      localStorage.setItem(questionId, JSON.stringify(storedCode));
    };
    codeStorageService.automaticallyStoreCodeOnInterval = function(
      questionId, code, language, intervalInSeconds) {
      setInterval(function() {
        codeStorageService.saveCode(questionId, code);
      }, intervalInSeconds * SECONDS_TO_MILLISECONDS);
    };
    codeStorageService.automaticallyStoreCode = function(
      questionId, code, language) {
      codeStorageService.automaticallyStoreCodeOnInterval(
        questionId, code, language, 
        DEFAULT_AUTO_SAVE_SECONDS * SECONDS_TO_MILLISECONDS);
    };
    codeStorageService.loadStoredCode = function(questionId, language) {
      var storedCode = getObjFromLocalStorage(questionId);
      if (storedCode) {
        return storedCode[language];
      } else {
        return null;
      }
    };

    codeStorageService.resetCode = function(questionId, language) {
      var storedCode = getObjFromLocalStorage(questionId);
      if (storedCode) {
        delete storedCode[language];
        localStorage.setItem(questionId, JSON.stringify(storedCode));
      }
    };
    return codeStorageService;
  }
]);
