# SAFE HOMECARE - Screen Mockups

## UI/UX Design Overview

This document describes the visual design and user interface of the SAFE HOMECARE mobile application.

---

## Color Scheme

### Primary Colors
- **Primary Blue**: #2196F3 - Main brand color (buttons, headers)
- **Success Green**: #4CAF50 - Secondary actions, normal status
- **Alert Red**: #F44336 - Warnings, leak detected status
- **White**: #FFFFFF - Card backgrounds, text on colored backgrounds
- **Light Gray**: #F5F5F5 - App background

### Text Colors
- **Dark Gray**: #333333 - Primary text
- **Medium Gray**: #666666 - Secondary text
- **Light Gray**: #999999 - Tertiary text, disabled

---

## Screen Mockups

### 1. Dashboard Screen

```
╔══════════════════════════════════════════════════════════╗
║  ← SAFE HOMECARE                                         ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  Welcome to SAFE HOMECARE                               ║
║  Your complete leak detection and prevention program   ║
║                                                          ║
╠══════════════════════════════════════════════════════════╣
║  ┌────────────────────────────────────────────────┐    ║
║  │  System Status                                  │    ║
║  │                                                 │    ║
║  │  Normal                                        │    ║
║  │  [Green large text]                            │    ║
║  │                                                 │    ║
║  │  2 Device(s) Connected                         │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │  📊 Leak Detection Reports                     │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │  📝 Create New Report                          │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │  🔧 Manage Sensors                             │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │  🔔 Alert Settings                             │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │  About SAFE HOMECARE                           │    ║
║  │                                                 │    ║
║  │  Safe Homecare combines all your plumbing,    │    ║
║  │  leak detection, and maintenance needs...      │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

**Key Features:**
- Large status indicator (green for normal, red for leak)
- Device count prominently displayed
- Large, touch-friendly buttons
- Consistent spacing and padding
- Clear visual hierarchy

---

### 2. Leak Detection Reports Screen

```
╔══════════════════════════════════════════════════════════╗
║  ← Leak Detection Reports                                ║
╠══════════════════════════════════════════════════════════╣
║  All Reports                           + New Report      ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │  Kitchen Sink Inspection     ✓ No Leak         │    ║
║  │                                                 │    ║
║  │  Date: 2024-01-15 10:30 AM                    │    ║
║  │  Location: Kitchen                             │    ║
║  │  Routine inspection of sink and fixtures      │    ║
║  │                                                 │    ║
║  │  📷 3 Photo(s)    🎥 1 Video(s)                │    ║
║  │                                                 │    ║
║  │              [Share]     [Delete]              │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │  Bathroom Leak Found     ⚠️ Leak Detected      │    ║
║  │                                                 │    ║
║  │  Date: 2024-01-14 3:45 PM                     │    ║
║  │  Location: Master Bathroom                     │    ║
║  │  Found leak under sink, urgent repair needed  │    ║
║  │                                                 │    ║
║  │  📷 5 Photo(s)    🎥 2 Video(s)                │    ║
║  │                                                 │    ║
║  │              [Share]     [Delete]              │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │  Basement Inspection         ✓ No Leak         │    ║
║  │                                                 │    ║
║  │  Date: 2024-01-10 2:00 PM                     │    ║
║  │  Location: Basement                            │    ║
║  │  Checked water heater and pipes               │    ║
║  │                                                 │    ║
║  │  📷 2 Photo(s)                                 │    ║
║  │                                                 │    ║
║  │              [Share]     [Delete]              │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

**Key Features:**
- Clear report cards with shadows
- Status badges (green for no leak, red for leak detected)
- Media count indicators
- Easy access to share and delete actions
- Chronological ordering (newest first)

---

### 3. Create Report Screen

```
╔══════════════════════════════════════════════════════════╗
║  ← Create Report                                         ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  Report Title *                                         ║
║  ┌────────────────────────────────────────────────┐    ║
║  │ Kitchen Sink Leak Inspection                   │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  Location *                                             ║
║  ┌────────────────────────────────────────────────┐    ║
║  │ Kitchen                                         │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  Description                                            ║
║  ┌────────────────────────────────────────────────┐    ║
║  │ Found small leak under kitchen sink...         │    ║
║  │                                                 │    ║
║  │                                                 │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ☑ Leak Detected                                        ║
║                                                          ║
║  Customer Email (Optional)                              ║
║  ┌────────────────────────────────────────────────┐    ║
║  │ customer@example.com                            │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  Media Documentation                                    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │      📷 Add Photo (2)                          │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │      🎥 Add Video (1)                          │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │         Create Report                          │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

**Key Features:**
- Clear form layout with labels
- Required field indicators (*)
- Large input areas
- Checkbox for leak status
- Media buttons with counters
- Prominent save button at bottom

---

### 4. Alert Notification (System Overlay)

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║  ┌────────────────────────────────────────────────┐    ║
║  │  ⚠️ Leak Detected!                             │    ║
║  │                                                 │    ║
║  │  A leak has been detected at Kitchen.         │    ║
║  │  Please check immediately.                     │    ║
║  │                                                 │    ║
║  │          [View Details]      [OK]              │    ║
║  └────────────────────────────────────────────────┘    ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

**Key Features:**
- Clear warning icon
- Urgent message
- Location information
- Action buttons

---

## Interaction Patterns

### Button States

**Normal State:**
- Solid color background
- White text
- Subtle shadow

**Pressed State:**
- Slightly darker background
- Pressed effect (scale down slightly)

**Disabled State:**
- Gray background
- Gray text
- No shadow

### Card Design

**Standard Card:**
- White background
- Border radius: 10px
- Shadow: subtle elevation
- Padding: 15-20px
- Margin: 10-15px

### Typography

**Headers:**
- Font size: 24px
- Weight: Bold
- Color: #333333

**Subheaders:**
- Font size: 18px
- Weight: Bold
- Color: #333333

**Body Text:**
- Font size: 14-16px
- Weight: Normal
- Color: #666666

**Labels:**
- Font size: 16px
- Weight: Bold
- Color: #333333

---

## Navigation Flow

```
Dashboard (Home)
    │
    ├─→ Leak Detection Reports
    │       │
    │       └─→ View Report Details
    │       │
    │       └─→ Create New Report → Save → Share
    │
    ├─→ Create Report (Direct)
    │       │
    │       └─→ Take Photo/Video
    │       │
    │       └─→ Save → Share
    │
    ├─→ Manage Sensors
    │       │
    │       └─→ Scan for Sensors
    │       │
    │       └─→ Connect/Disconnect
    │
    └─→ Alert Settings
            │
            └─→ Configure Notifications
```

---

## Responsive Design

### Portrait Mode (Primary)
- Vertical scrolling
- Full-width buttons
- Stacked layout

### Landscape Mode
- Horizontal padding increased
- Maximum content width: 600px
- Centered content

---

## Accessibility Features

### Current
- Large touch targets (minimum 44x44 points)
- High contrast text
- Clear visual hierarchy
- Meaningful button labels

### Planned
- Screen reader support
- Voice commands
- Haptic feedback
- Adjustable text size

---

## Animation & Transitions

### Screen Transitions
- Slide animation (300ms)
- Native feel

### Button Press
- Scale down (95%)
- Bounce back

### Alert Appearance
- Fade in from top
- Slide down animation

### Loading States
- Activity indicator
- Progress bar for uploads

---

## Icons & Imagery

### Icon Style
- Emoji-based for simplicity and cross-platform consistency
- Custom icons for future professional version

### Photo/Video Display
- Thumbnail previews
- Full-screen viewer on tap
- Swipe to navigate

---

## Empty States

### No Reports
```
    (Icon: Empty folder)
    
    No reports yet
    
    Create your first leak detection report
    
    [Create Report Button]
```

### No Connected Sensors
```
    (Icon: Bluetooth)
    
    No sensors connected
    
    Add a sensor to start monitoring
    
    [Scan for Sensors Button]
```

---

## Error States

### Network Error
```
    (Icon: Warning)
    
    Connection Error
    
    Unable to share report. Please check
    your internet connection.
    
    [Retry]    [Cancel]
```

### Permission Denied
```
    (Icon: Lock)
    
    Permission Required
    
    Camera access is needed to take photos.
    Please enable it in Settings.
    
    [Open Settings]    [Cancel]
```

---

## Loading States

### Processing
```
    [Spinner Animation]
    
    Creating report...
```

### Scanning
```
    [Bluetooth Icon Animation]
    
    Scanning for sensors...
```

---

## Success States

### Report Created
```
    ✓ Success!
    
    Report created successfully
    
    [Share Now]    [Done]
```

### Sensor Connected
```
    ✓ Connected
    
    Sensor connected successfully
    
    [OK]
```

---

## Design Principles

1. **Simplicity**: Clean, uncluttered interface
2. **Clarity**: Clear labels and instructions
3. **Consistency**: Uniform design patterns
4. **Efficiency**: Minimal taps to complete tasks
5. **Feedback**: Clear response to user actions
6. **Accessibility**: Easy to use for all users
7. **Professional**: Business-appropriate design

---

## Platform-Specific Adaptations

### Android
- Material Design components
- Floating action buttons
- Bottom navigation
- System back button support

### iOS
- iOS-style navigation
- Swipe gestures
- Native alert dialogs
- Tab bar navigation

---

**Last Updated:** 2024-02-01
**Design Version:** 1.0.0
