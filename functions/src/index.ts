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
import { Firestore } from "@google-cloud/firestore"
import { apiRoute } from "./controller/apiRoute"
import { apiRoutePoint } from "./controller/apiRoutePoint"

const PROJECT_ID = "rutas-257409"

// if you need to use the Firebase Admin SDK, uncomment the following:
// import * as admin from 'firebase-admin'

// Create and Deploy Cloud Function with TypeScript using script that is
// defined in functions/package.json:
//    cd functions
//    npm run deploy

export const firestore = new Firestore({
  projectId: PROJECT_ID,
  credentials: {
    client_email: "rutas-257409@appspot.gserviceaccount.com",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDhw+no8LRApjTa\nK/p7s8Wh0CD43S1GOB0vZlZmQeSCY9v+iuXJguLTAgzLzqBSS/KZKMdgu9qsoz6A\n4kF5BYcHkQnWrA/XQes1Da91WtInZQnPoa2+tAvWu5BWKyNHrK5+7N9W0Wd7KFQY\nddrgdxHc7U4BKstULII8PwwOqAIy4pjVUtfo5/91pgohI7yL2leRC9QIhOcctBsb\nJNK/sdNJQyoLuX5FPgJKd/FnJp37/aj45Xf4yNMCbP3+Scp2tBWpADRYUf/yAS7G\n98idKpjfMB9atRtKxJOslv6TfdRWis5ZmPKKM5t8j33q42kux83GCVPfIDuE8pDU\nItMugPVBAgMBAAECggEAHza8D2XANjQEmKl97z5ys6WX+XBzAwNdHaGTjn3Lvy9Z\nSj8f+BVtkOj2pfMCfX5co0pdDoXKfRXw3Vbq4HWgLq6h4plVc1h80Y/700jkR2gT\nzC45XGV+QYkbMp6yOQWp9oh/dHxtRzzTK7KXuXMc+COjJkwpYpDozLWW0CvwaeJh\nz5eJcUIsYtLYVEfN8qZfibT+xdoS7OV4sx8lzOLsHbHX8mbF9dgxdpqZJCKxiJJB\nQ1cj5avmJ/7SndBamK2xNEvApPNtXTE+F5tJ+yGq62cWUGgYA8xPqV7QfbJPICSi\nAL3xvomwjifDsc166C9n8F6d9bXtBdwY1JHlOfMkcQKBgQD/bIRSWqcB9tRXJ/vz\nGYfFPoolBe8nfesDPlH8LTyylLpt1d8PA+pazRWS2IyduTjMAd78Aj9bAkW4X+Pv\nmOxR6WrseGtJ5O+CG3NLJuwWBr0ZTRhq2T/VUdJuJOnKb8IsmIjuMhRs0+Xyj6KA\n0TuKaee4BvOBaCkAorn1PiCd1QKBgQDiRkWUI9X6YzzbteGg3MyBiatmUc+A+/sV\nh3KN55AxqvUfp2Gr1x6dYYZtZblmPxoinrH5EoqajpO++bZWBSDn8NRJWiZT8HW9\nCF/NGFdfTSJBpyfEQHZSUwNYnjCtlhmhAkzU802SK4yW3h3E6tw+ZMoLJtzHV0SA\nJ50Vi48zvQKBgFb/bSpnug6PNc/hzI0GmxnxrTfjB4wZ9VwLc/1CozPoOH+Eow8I\nNGBtDfYQUATAu7mwwXRwh4fGBF1CO+611Xgo2sRkV5a5pWJZWzGztiHidbISckii\nan2L+vKNHBxZaHesFKec4xwWKHIvvhfGLFN+svAZXgMrqRuQUWpYmN9pAoGBAMfD\n6Huv46Kp6DnE6oy9QmN+qm6r/XlPfU11hkIX1Oq0lrI6cPVn9yRUzHxamYLWZPl5\nh4BwySNIitHI3hw1bOa4bILR7xKeMSQRd5q3SbPegkbaDzao/o0RstuS1UD7Smcm\ng7RhlPNeNUGgmUGXY5hGHUYZKkNnHRfTYVB7JJM1AoGAL+YyXjJaMfjNX2vbRYEE\nh8AjufrQb8BFKC9dQjf8IcUh3mrv7qxAs2IDZcmjsncxmruRDLj3K24klfmK2jiM\n6uNBhVyXb+X+48of/6CvS2pKmLSyMJM8KGtLXjKeIbT5BsKvm1s2/pGfZaMLsn7s\nrECDoJx1N4BzzvQW3oyN5mQ=\n-----END PRIVATE KEY-----\n"
  }
})

export const routeFunction = functions.region("europe-west1").https.onRequest(apiRoute)

export const routePointFunction = functions.region("europe-west1").https.onRequest(apiRoutePoint)
