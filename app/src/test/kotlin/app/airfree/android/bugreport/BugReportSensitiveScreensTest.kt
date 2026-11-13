/*
 * Copyright 2026 AirFree contributors.
 *
 * Licensed under the Apache License, Version 2.0.
 */
package app.airfree.android.bugreport

import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class BugReportSensitiveScreensTest {
    @Test
    fun shouldRedact_matchesSensitiveActivities() {
        assertTrue(BugReportSensitiveScreens.shouldRedact("app.airfree.android.send.SendActivity"))
        assertTrue(BugReportSensitiveScreens.shouldRedact("app.airfree.android.send.ShowQrActivity"))
        assertTrue(
            BugReportSensitiveScreens.shouldRedact(
                "app.airfree.android.consent.ConsentTrampolineActivity",
            ),
        )
    }

    @Test
    fun shouldRedact_allowsNonSensitiveActivities() {
        assertFalse(BugReportSensitiveScreens.shouldRedact("app.airfree.android.MainActivity"))
        assertFalse(
            BugReportSensitiveScreens.shouldRedact(
                "app.airfree.android.onboarding.PermissionsOnboardingActivity",
            ),
        )
    }
}
