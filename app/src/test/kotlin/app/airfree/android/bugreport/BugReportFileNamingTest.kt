/*
 * Copyright 2026 AirFree contributors.
 *
 * Licensed under the Apache License, Version 2.0.
 */
package app.airfree.android.bugreport

import org.junit.Assert.assertEquals
import org.junit.Test
import java.time.Instant

class BugReportFileNamingTest {
    @Test
    fun archiveName_usesUtcTimestampFormat() {
        assertEquals(
            "airfree-bugreport-20260505-103500Z.zip",
            BugReportFileNaming.archiveName(Instant.parse("2026-05-05T10:35:00Z")),
        )
    }
}
