/*
 * Copyright 2026 AirFree contributors.
 *
 * Licensed under the Apache License, Version 2.0.
 */
package app.airfree.android.protocol.connection

import app.airfree.android.protocol.medium.UpgradePathCredentials

internal fun UpgradePathCredentials.wifiDirectFrequencyMhzOrNull(): Int? =
    (this as? UpgradePathCredentials.WifiDirect)
        ?.frequency
        ?.takeIf { it != UpgradePathCredentials.WifiDirect.FREQUENCY_NOT_SET && it > 0 }
