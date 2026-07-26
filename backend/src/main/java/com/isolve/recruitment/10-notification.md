# Notification Module

## Purpose

The Notification module manages communication between the system and users.

---

## Responsibilities

- Send system notifications
- Manage notification preferences
- Track notification status
- Support multiple communication channels

---

## Owns

- Notification
- Notification status
- Notification preferences

---

## Does Not Own

The Notification module does not manage:

- User accounts
- Business processes
- Recruitment decisions

---

## Main Entities

### Notification

Represents a message sent to a user.

Contains:

- Recipient
- Message
- Type
- Status

---

## Notification Types

Examples:

- Email
- SMS
- Push notification
- In-app message

---

## Communicates With

All modules.

Examples:

Application:

"Application received"

Interview:

"Interview scheduled"

Placement:

"Candidate placed"

---

## Future Features

- Email templates
- SMS integration
- Push notifications
- Notification queue