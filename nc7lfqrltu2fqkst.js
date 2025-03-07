import {
    av as g,
    r as p,
    e8 as c,
    fe as m,
    ff as f,
    ct as b,
    S as h,
    dq as w,
    a0 as M,
    B as _,
    w as y
} from "./bq4rrqi54riy5k2e.js";
import {
    w as i,
    x as d,
    y as S,
    z as C,
    U as k
} from "./lwme42j7zzyr3q7j.js";
import {
    r as l,
    c as x
} from "./mna1wiucqak6lqzp.js";
import {
    u as E
} from "./m0wlwtibo8yb2c2h.js";

function T() {
    const {
        eligible: e,
        isLoading: a,
        markAsViewed: o
    } = i(d.NewOnboardingFlow), {
        layer: n
    } = g("109457"), [t, r] = l.useState(!0), s = S();
    return {
        isOpen: e && t && !s && n.get("is_guided_onboarding", !1),
        isLoading: a,
        setIsOpen: r,
        markAsViewed: o
    }
}
const O = p({
    hi: {
        id: "new_user_onboarding.hi",
        defaultMessage: "Hi"
    },
    hiThere: {
        id: "new_user_onboarding.hi_there",
        defaultMessage: "Hi there"
    },
    tryUploadingAFile: {
        defaultMessage: "Try uploading a file",
        id: "chatgpt.new-onboarding.try-uploading-a-file"
    },
    uploadFileExample: {
        defaultMessage: "ChatGPT can summarize and analyze your files or images.",
        id: "chatgpt.new-onboarding.upload-file-exp"
    },
    school: {
        defaultMessage: "School",
        id: "chatgpt.new-onboarding.school"
    },
    schoolPrompt: {
        defaultMessage: "I’m trying to learn and do better in school.",
        id: "chatgpt.new-onboarding.school-prompt"
    },
    work: {
        defaultMessage: "Work",
        id: "chatgpt.new-onboarding.work"
    },
    workPrompt: {
        defaultMessage: "I'm here to learn and grow in my work.",
        id: "chatgpt.new-onboarding.work-prompt"
    },
    personalTasks: {
        defaultMessage: "Personal tasks",
        id: "chatgpt.new-onboarding.personal-tasks"
    },
    personalTasksPrompt: {
        defaultMessage: "I'm here for my personal tasks",
        id: "chatgpt.new-onboarding.personal-tasks-prompt"
    },
    funAndEntertainment: {
        defaultMessage: "Fun and entertainment",
        id: "chatgpt.new-onboarding.fun-and-entertainment"
    },
    funAndEntertainmentPrompt: {
        defaultMessage: "I'm here to explore fun ideas and relax.",
        id: "chatgpt.new-onboarding.fun-and-entertainment-prompt"
    },
    other: {
        defaultMessage: "Other",
        id: "chatgpt.new-onboarding.other"
    },
    justCurious: {
        defaultMessage: "Just curious",
        id: "chatgpt.new-onboarding.just-curious"
    },
    justCuriousPrompt: {
        defaultMessage: "I'm just curious, exploring what you can do.",
        id: "chatgpt.new-onboarding.just-curious-prompt"
    },
    tryAnExample: {
        defaultMessage: "Try an example below or send any message in the message box below.",
        id: "chatgpt.new-onboarding.try-an-example"
    }
});

function A() {
    const {
        eligible: e,
        isLoading: a,
        markAsViewed: o
    } = i(d.NewOnboardingConvo);
    return {
        isEligible: e && !a,
        markAsViewed: o
    }
}

function U(e) {
    const a = C(u => u.onboardingConvoState || void 0),
        {
            isEligible: o,
            markAsViewed: n
        } = A(),
        t = v({
            clientThreadId: e
        }),
        {
            layer: r
        } = g("109457"),
        s = x();
    l.useEffect(() => {
        o && !a && (s.locale === m || s.messages !== f) && r.get("onboarding_style", "") === "CONVO" && (k.setOnboardingConvoState({
            onboardingConvoClientThreadId: e
        }), n(), t({
            eventSource: "url",
            stepPrompt: s.formatMessage(O.hi),
            messageMetadata: {
                is_visually_hidden_from_conversation: !0
            },
            authorMetadata: {
                real_author: b.Onboarding
            }
        }), h.logEvent("chatgpt_convo_onboarding_started"))
    }, [o, n, t, a, s, s.locale, s.messages, e, r])
}
const v = ({
    clientThreadId: e
}) => {
    const a = E(e);
    return l.useCallback(({
        stepPrompt: o,
        messageMetadata: n,
        authorMetadata: t,
        ...r
    }) => {
        a({ ...r,
            promptMessage: c(o, n, t)
        })
    }, [a])
};

function I(e) {
    const a = M(e, r => _.findNode(r, s => s.message.author.role === y.User) ? .message.metadata ? .onboarding),
        {
            eligible: o,
            isLoading: n,
            markAsViewed: t
        } = i(d.hasSeenFilePickerNuxTooltip);
    return {
        isEligible: a ? .triggered_tools ? .includes("file_upload") && o && !n,
        markAsViewed: t
    }
}

function j() {
    const {
        layer: e
    } = w("109457");
    return e.get("onboarding_show_followups", !1)
}
export {
    v as a, U as b, I as c, j as d, O as m, T as u
};
//# sourceMappingURL=nc7lfqrltu2fqkst.js.map