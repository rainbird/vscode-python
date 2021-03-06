// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

export enum PTVSDEvents {
    // Event sent by PTVSD when a child process is launched and ready to be attached to for multi-proc debugging.
    ChildProcessLaunched = 'ptvsd_subprocess',
    AttachToSubprocess = 'ptvsd_attach'
}
