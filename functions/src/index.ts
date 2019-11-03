/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as functions from "firebase-functions"
import {
  Firestore,
  DocumentReference,
  WriteResult,
  QuerySnapshot,
  DocumentSnapshot
} from "@google-cloud/firestore"
import { apiRoute } from "./apiRoute"
import { apiRoutePoint } from "./apiRoutePoint"

const PROJECT_ID = "rutas-257409"

// if you need to use the Firebase Admin SDK, uncomment the following:
// import * as admin from 'firebase-admin'

// Create and Deploy Cloud Function with TypeScript using script that is
// defined in functions/package.json:
//    cd functions
//    npm run deploy

export const firestore = new Firestore({
  projectId: PROJECT_ID,
  timestampsInSnapshots: true
})

export const routeFunction = functions
  .region("europe-west1")
  .https.onRequest(apiRoute)

export const routePointFunction = functions
  .region("europe-west1")
  .https.onRequest(apiRoutePoint)
