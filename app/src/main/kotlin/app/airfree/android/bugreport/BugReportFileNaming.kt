/*
 * Copyright 2026 AirFree contributors.
 *
 * Licensed under the Apache License, Version 2.0.
 */
package app.airfree.android.bugreport

import java.time.Instant
import java.time.ZoneOffset
import java.time.format.DateTimeFormatter

internal object BugReportFileNaming {
    private val archiveFormatter: DateTimeFormatter =
        DateTimeFormatter
            .ofPattern("yyyyMMdd-HHmmss")
            .withZone(ZoneOffset.UTC)

    fun archiveName(now: Instant): String = "airfree-bugreport-${archiveFormatter.format(now)}Z.zip"
}
