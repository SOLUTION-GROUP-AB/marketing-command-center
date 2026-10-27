# Agent Commerce Readiness

**Status:** P1 / discovery and architecture  
**Added:** 2026-10-27

## Goal

Extend MCR's AI Commerce Visibility work so it can evaluate whether a merchant is ready for AI-agent-driven shopping.

Walmart's October 2026 Agent Gateway / Agent Profiles announcement is the reference signal: commerce systems are beginning to expose machine-oriented access, explicit agent identity and customer-controlled permissions.

## Strategic position

MCR should not build a competing shopping protocol.

Google is already building the infrastructure layer through Universal Commerce Protocol (UCP), Universal Cart, Shopping Graph and Gemini/Search. UCP is designed for agentic commerce and is compatible with MCP.

MCR's durable role should be:

```text
merchant systems + feeds + storefront + agent protocols
        ↓
readiness / data quality / discoverability
        ↓
AI-agent visibility + traffic + transactions
        ↓
cross-channel attribution + commercial impact
        ↓
recommended actions + approval + verification
```

## Audit areas

### 1. Product discovery and data quality
- SKU / GTIN where applicable / brand
- titles, descriptions and structured attributes
- variants
- price and inventory
- images
- taxonomy
- Merchant Center / product feeds
- structured data
- crawlability and indexability

### 2. Agent access
- UCP readiness where applicable
- MCP or equivalent agent interfaces
- catalog/product endpoints
- live price, inventory and variant access
- stable product/cart identifiers

### 3. Identity and permissions
- agent identity
- permission scopes
- customer approval requirements
- separation of human and agent actions
- auditable action history

### 4. Checkout readiness
- cart creation/update
- checkout handoff or native checkout
- consent handling
- shipping/returns/policies
- error and recovery handling

### 5. Measurement
MCR should distinguish where technically possible:
- AI referral traffic
- agent-originated sessions/actions
- agent-assisted conversions
- agent-completed transactions
- source / agent / protocol
- revenue, conversion rate and margin
- failed or abandoned agent actions

### 6. Recommended actions
Every finding should include:
- issue
- evidence
- commercial impact
- confidence
- recommended fix
- owner/system
- verification method

## First implementation step

Do not build an agent checkout flow first.

Run one WooCommerce pilot through a technical audit against:
1. current product/feed quality,
2. Google UCP requirements,
3. relevant MCP/agent-access options,
4. attribution and measurement gaps.

Turn the result into a reusable **Agent Commerce Readiness** module inside the broader AI Commerce Visibility Audit.

## Sources

- Walmart: "Making It Possible for Agents to Shop on Behalf of Customers", 2026-10-21.
- Google: Universal Commerce Protocol documentation and 2026 UCP / Universal Cart product updates.
