/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { createValidatedOpenApiRouter } from '@backstage/backend-openapi-utils';

export const spec = {
  openapi: '3.0.3',
  info: {
    title: 'linguist',
    description:
      'This API powers the backend for the linguist plugins of backstage.',
    version: '1.0',
    license: {
      name: 'Apache-2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
    contact: {},
  },
  servers: [
    {
      url: '/',
    },
  ],
  paths: {
    '/health': {
      get: {
        description: 'Checks if the linguist backend is hooked up properly',
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/entity-languages': {
      get: {
        description:
          'Returns the language breakdown of the passed in entityRef.',
        parameters: [
          {
            in: 'query',
            description:
              'Reference passed in the format <kind>:<namespace>/<name>',
            example: 'component:default/my-component',
            name: 'entityRef',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Languages',
                },
              },
            },
          },
          '500': {
            $ref: '#/components/responses/ServerError',
          },
        },
      },
    },
  },
  components: {
    examples: {},
    headers: {},
    parameters: {},
    requestBodies: {},
    responses: {
      ServerError: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                error: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      example: 'Error',
                    },
                    message: {
                      type: 'string',
                      example: 'No entityRef was provided',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    schemas: {
      LanguageType: {
        type: 'string',
        enum: ['programming', 'data', 'markup', 'prose'],
        example: 'programming',
      },
      Language: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'java',
          },
          percentage: {
            type: 'number',
            example: 20.03,
          },
          bytes: {
            type: 'number',
            example: 3000,
          },
          type: {
            $ref: '#/components/schemas/LanguageType',
          },
          color: {
            type: 'string',
            example: '#f1e05a',
          },
        },
      },
      Languages: {
        type: 'object',
        properties: {
          languageCount: {
            type: 'number',
            example: 3,
          },
          totalBytes: {
            type: 'number',
            example: 10000,
          },
          processedDate: {
            type: 'string',
            example: '2024-11-15T18:17:29.460Z',
          },
          breakdown: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Language',
            },
          },
        },
      },
    },
  },
} as const;
export const createOpenApiRouter = async (
  options?: Parameters<typeof createValidatedOpenApiRouter>['1'],
) => createValidatedOpenApiRouter<typeof spec>(spec, options);
