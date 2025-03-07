import {
    P as he,
    a as ve,
    w as H,
    a4 as ye,
    fU as Te,
    aG as ne,
    fV as Ce,
    cz as Ee,
    fd as Re,
    dm as be,
    l as Me,
    z as we,
    fW as Ae,
    B as w,
    aM as ke,
    O as Oe,
    Q as Ie,
    aT as Ne,
    a7 as X,
    $ as Pe,
    aH as Ue,
    Y as qe,
    aI as K,
    aJ as Fe,
    fX as ze,
    cR as xe,
    fY as He,
    fZ as Z,
    f_ as $e,
    fp as Le,
    f$ as Qe,
    g0 as Ve
} from "./bq4rrqi54riy5k2e.js";
import {
    e2 as Ge,
    e3 as De,
    e4 as Be,
    e5 as je,
    e6 as Ye,
    e7 as Je,
    e8 as ee,
    e9 as We,
    l as Xe,
    b$ as Ke,
    $ as Ze,
    ea as te,
    eb as et,
    ec as tt,
    ed as ot,
    ee as nt,
    ef as st,
    eg as it,
    aj as at,
    eh as rt,
    ei as ct,
    ej as oe,
    ek as lt,
    el as dt,
    em as gt,
    en as ut,
    eo as mt
} from "./lwme42j7zzyr3q7j.js";
import {
    a as _t,
    d as ft,
    r as pt
} from "./mna1wiucqak6lqzp.js";
import {
    T as St
} from "./cxz91putlw7pmfk2.js";
const ht = "OAI-Echo-Logs",
    E = {
        FOCUS_IN: 0,
        FOCUS_OUT: 1,
        COPY: 2,
        PASTE: 3,
        TOUCH_START: 4,
        TOUCH_END: 5
    },
    se = [];

function R(e) {
    return () => {
        se.push({
            type: e,
            ts: Math.round(performance.now())
        })
    }
}
const vt = {
    focusin: R(E.FOCUS_IN),
    focusout: R(E.FOCUS_OUT),
    copy: R(E.COPY),
    paste: R(E.PASTE),
    touchstart: R(E.TOUCH_START),
    touchend: R(E.TOUCH_END)
};

function Nt(e) {
    const t = e ? ? document.getElementById(St);
    for (const [n, a] of Object.entries(vt)) t ? .removeEventListener(n, a), t ? .addEventListener(n, a)
}

function yt() {
    return {
        [ht]: se.slice(0, 10).map(e => `${e.type},${e.ts}`).join(",")
    }
}

function Tt(e, t, n, a, p) {
    const g = Rt(e, t, n, p);
    return Et(n, a, g)
}
const Ct = 1e3 * 30,
    A = Ge.getTracer("completion");
async function* Et(e, t, n) {
    let a = !1,
        p = !1,
        g = !1,
        u = !1,
        v, m, i, r, y;
    A.startActiveSpan("completion.response", o => {
        v = A.startSpan("completion.first_response"), m = A.startSpan("completion.first_token_including_tool_calls"), i = A.startSpan("completion.first_token_including_visible_content"), r = A.startSpan("completion.first_token"), y = o
    });
    let S = setTimeout(() => {
        he.logEvent(ve.sseResponseWaitTooLong, {}), e.logCompletion({
            type: De.Error,
            error: {
                reason: "timeout",
                message: "SSE Response Took Too Long to Come Back"
            }
        })
    }, Ct);
    try {
        t ? .logTiming("prompt_submitted");
        for await (const o of n) yield o, o.type !== "connected" && S && (clearTimeout(S), S = null), o.type === "message" && (e.onMessageUpdate(o.message), a || (a = !0, v ? .end(), t ? .logTiming("first_response")), !p && o.message.author.role === H.Assistant && (p = !0, m ? .end(), t ? .logTiming("first_assistant_token")), !g && o.message.author.role === H.Assistant && ye(o.message) && (g = !0, i ? .end(), t ? .logTiming("first_visible_content_token")), !u && o.message.author.role === H.Assistant && Te(o.message) && (u = !0, r ? .end(), t ? .logTiming("first_message_token"))), o.type === "done" && e.onStreamClose()
    } catch (o) {
        throw S && (clearTimeout(S), S = null), o
    } finally {
        y ? .end()
    }
}
async function* Rt(e, t, n, a) {
    let g = `${ne(e)?Be(3010482349,`${t.model}-AAAA`)?"https://chatgpt.com/backend-alt":"https://chatgpt.com/backend-api":"https://chatgpt.com/backend-anon"}/conversation`;
    n.onSentUserMessage();
    const u = je(g, {
            clientSession: e,
            method: "POST",
            headers: { ...yt(),
                ...Ce(t.chatReq, t.turnstileToken, t.proofToken, null),
                ...t.conduitToken ? {
                    "x-conduit-token": t.conduitToken
                } : {}
            },
            body: bt(t),
            intercomEventOnError: "fetch-error:conversation:new-message",
            signal: a,
            observer: {
                onEvent: i => {
                    n.onStreamEvent(i.byteLength, i.isDoneEvent)
                },
                onClose: (i, r) => {
                    i ? n.onStreamClose() : n.handleRawError(r instanceof Error || typeof r == "string" ? r : JSON.stringify(r))
                }
            }
        }),
        v = Ye(u, i => {
            n.stream_encoding = i
        });
    let m = !1;
    for await (const i of v) if ("response" in i) yield {
        type: "connected",
        serverRequestId: i.response.headers.get("Cf-Ray") ? ? null
    };
    else {
        const r = Mt(i.data);
        r && (r.type === "done" && (m = !0), yield r)
    }
    m || (yield {
        type: "done"
    })
}

function bt(e) {
    const t = "threadId" in e ? e.threadId : void 0;
    return {
        action: e.completionType,
        messages: e.messages.length > 0 ? e.messages : void 0,
        conversation_id: t,
        continue_from_shared_conversation_id: "continueFromSharedConversationId" in e && t == null ? e.continueFromSharedConversationId : void 0,
        parent_message_id: e.parentMessageId,
        model: e.model,
        timezone_offset_min: new Date().getTimezoneOffset(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        variant_purpose: e.completionMetadata ? .variantPurpose,
        suggestions: e.completionMetadata ? .suggestions ? e.completionMetadata.suggestions.map(n => Je(n)) : void 0,
        chosen_suggestion: e.completionMetadata ? .suggestion ? {
            type: e.completionMetadata.suggestion.type,
            index: e.completionMetadata.suggestionIndex,
            source: e.completionMetadata.suggestion.type === ee.Autocomplete ? e.completionMetadata.suggestion.source : void 0,
            user_input: e.completionMetadata.suggestion.type === ee.Autocomplete ? e.completionMetadata.suggestion.userInput : void 0
        } : void 0,
        history_and_training_disabled: h(e.historyDisabled),
        conversation_mode: e.completionMetadata ? .conversationMode,
        force_paragen: h(e.forceParagen),
        force_paragen_model_slug: e.forceParagenModel,
        force_indepth_feedback: h(e.forceIndepthFeedback),
        force_rate_limit: h(e.forceRateLimit),
        reset_rate_limits: h(e.resetRateLimits),
        record_rendering: h(e.recordRendering),
        disable_system_content_toggling: h(e.disableSystemContentToggling),
        enable_message_followups: e.enableMessageFollowups,
        source: e.completionMetadata ? .source,
        system_hints: e.completionMetadata ? .systemHints,
        prefetch_ids: e.completionMetadata ? .prefetchIds,
        supports_buffering: !0,
        supported_encodings: [We.V1],
        conversation_origin: I(e.conversationOrigin),
        force_use_search: I(e.forceUseSearch),
        client_reported_search_source: e.completionMetadata ? .searchSource,
        client_contextual_info: e.contextualInfo,
        paragen_stream_type_override: I(e.paragenStreamType === "none" ? null : e.paragenStreamType),
        paragen_cot_summary_display_override: I(e.paragenCotSummaryDisplay === "none" ? null : e.paragenCotSummaryDisplay),
        is_onboarding_conversation: h(e.isOnboardingConversation)
    }
}

function h(e) {
    if (e === !0) return e
}

function I(e) {
    if (e != null) return e
}

function Mt(e) {
    if ("type" in e) switch (e.type) {
        case "gizmo_inline_review":
            return {
                type: "gizmo_inline_review",
                gizmoId: e.gizmo_id
            };
        case "title_generation":
            return {
                type: "title_generation",
                title: e.title,
                conversation_id: e.conversation_id
            };
        case "moderation":
            return {
                type: "moderation",
                conversationId: e.conversation_id,
                messageId: e.message_id,
                isCompletion: e.is_completion,
                flagged: e.moderation_response.flagged,
                blocked: e.moderation_response.blocked,
                disclaimers: e.moderation_response.disclaimers,
                metadata: e.moderation_response.metadata
            };
        case "url_moderation":
            return {
                type: "url_moderation",
                conversationId: e.conversation_id,
                messageId: e.message_id,
                url: e.url_moderation_result.full_url,
                isSafe: e.url_moderation_result.is_safe
            };
        case "num_variants_in_stream":
            return {
                type: "num_variants_in_stream",
                num_variants_in_stream: e.num_variants_in_stream,
                display_treatment: e.display_treatment
            };
        case "conversation_detail_metadata":
            return e;
        case "message_stream_complete":
            return {
                type: "done"
            };
        default:
            return
    }
    if (e.message) return {
        type: "message",
        message: e.message,
        conversationId: e.conversation_id
    }
}

function Pt(e) {
    const t = _t(),
        n = Ee(),
        a = Re(),
        p = ft(),
        g = Xe(),
        u = Ke(e),
        v = u && "gizmo" in u ? u.gizmo ? .gizmo.id : void 0,
        m = Ze(v),
        i = v ? m ? te.PROJECT : te.GPT : void 0,
        r = et(e),
        y = tt();
    return pt.useCallback(async function({
        requestedModelId: S,
        completionType: o = K.Next,
        sourceEvent: N,
        eventSource: ie,
        completionMetadata: ae,
        extraStreamParams: re,
        parentMessageId: k,
        promptMessage: T,
        promptNodeMetadata: ce,
        existingMessages: P,
        prependMessages: U,
        appendMessages: q,
        profiler: b,
        conduitToken: le
    }) {
        const F = N ? .timeStamp ? ? performance.now(),
            de = ie ? ? (N ? ot(N) : "mouse"),
            $ = new AbortController,
            L = be(t),
            Q = Ve(),
            V = Me(e),
            O = `${Qe}${e}-${Q}`,
            G = `${e}-${Q}`,
            _ = we(e),
            M = S ? ? _ ? .modelId ? ? nt(Ae(t, a)).id,
            ge = !_ ? .tree ? .hasReceivedServerCompletion,
            ue = _ ? .continuingFromSharedConversationId != null,
            D = new ut(t, _, e, O, o, M, de, G, a, F, p, m, ge, ue),
            B = k ? w.getNode(_, k) : P ? .[0] ? w.getParentNode(_, P[0].id) : w.getCurrentNode(_),
            me = B.message.id ? ? B.id,
            j = [...P ? ? [], ...U ? ? [], ...T ? [T] : [], ...q ? ? []],
            C = new st({
                gizmoType: i,
                preflightTime: F
            });
        C.onUserMessages(j), ke.publish({
            kind: "requestCompletion"
        }), it.reset(), at(e, {
            source: Oe.CLIENT,
            value: Ie.STREAMING
        }), Ne.addRequest(O, $, C), rt.onCompletionRequestStarted(O), ct.incrementUserMessageCount(ne(L) ? X.LoggedIn : X.LoggedOut), Pe.retainThread(e), Ue(e, s => {
            V === void 0 && qe(e) && (s.initialThreadData.lastModelUsed = M), o === K.Next && w.hasUserMessage(s) && (s.scrollToMessageId = T ? .id), Fe.updateTree(s, (c, d) => {
                if (k && (d = w.getNode(s, k).id), U)
                    for (const x of U) d = c.addMessageNode(d, x);
                if (T && (d = c.addMessageNode(d, T, ce)), q)
                    for (const x of q) d = c.addMessageNode(d, x);
                const W = T ? .metadata ? .gizmo_id,
                    Se = ze("", W ? {
                        gizmo_id: W
                    } : void 0);
                return d = c.addMessageNode(d, Se, void 0, O), d
            })
        }), b ? .logTiming("start_chat_requirements");
        const z = xe("2411734826");
        let f = z ? He() : null,
            Y = z && f ? oe.getEnforcementTokenSync(f) : null,
            J = z && f ? Z.getEnforcementTokenSync(f) : null;
        if (!y) {
            f ? ? = await $e(), b ? .logTiming("fetched_chat_requirements"), f.force_login && g({
                authType: "login"
            }), Y ? ? = await oe.getEnforcementToken(f).then(c => (b ? .logTiming("fetched_turnstile_token"), c), c => null), J ? ? = await Z.getEnforcementToken(f).then(c => (b ? .logTiming("fetched_p_token"), c), c => null);
            const s = Le(a);
            t.getQueriesData(s) == null && await t.ensureQueryData(s)
        }
        lt() && await dt();
        const _e = (s, c) => {
                C.onStreamOpen(), s && C.onReceivedRequestId(s), mt(G, c, s, fe)
            },
            l = gt();
        C.onCompletionStarted(o, M);
        const fe = performance.now() - F,
            pe = Tt(L, {
                conversationOrigin: _ ? .conversationOrigin ? ? null,
                model: M,
                completionType: o,
                threadId: V,
                continueFromSharedConversationId: _ ? .continuingFromSharedConversationId,
                historyDisabled: a,
                parentMessageId: me,
                messages: j,
                chatReq: f,
                turnstileToken: Y,
                proofToken: J,
                conduitToken: le,
                completionMetadata: ae,
                contextualInfo: {
                    is_dark_mode: n,
                    time_since_loaded: Math.floor(performance.now() / 1e3),
                    page_height: window.innerHeight,
                    page_width: window.innerWidth,
                    pixel_ratio: window.devicePixelRatio,
                    screen_height: window.screen.height,
                    screen_width: window.screen.width
                },
                isOnboardingConversation: r,
                forceParagen: l.forceParagen,
                forceParagenModel: l.forceParagen ? l.forceParagenModel.value : void 0,
                forceRateLimit: l.forceRateLimit,
                resetRateLimits: l.resetRateLimits,
                recordRendering: l.recordRendering,
                disableSystemContentToggling: l.rebaseSystemMessageContent != null,
                forceUseSearch: l.forceUseSearch ? ? void 0,
                paragenStreamType: l.paragenStreamType,
                paragenCotSummaryDisplay: l.paragenCotSummaryDisplay,
                ...y ? {
                    f_completion: !0
                } : {},
                ...re
            }, C, b, $.signal);
        try {
            for await (const s of pe) s.type === "connected" ? _e(s.serverRequestId, M) : D.handleResponse(s)
        } catch (s) {
            D.handleError(wt(s))
        }
    }, [e, t, a, n, p, g, i, m, y, r])
}

function wt(e) {
    return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Something went wrong")
}
export {
    Nt as t, Pt as u
};
//# sourceMappingURL=m0wlwtibo8yb2c2h.js.map