/*
 * Portfolio chat
 * Answers come from js/knowledge.js. To upgrade to a real LLM later,
 * replace getAnswer() with a call to your own backend (see the note below).
 */

(function () {
    const log = document.getElementById("chatLog");
    const form = document.getElementById("chatForm");
    const input = document.getElementById("chatQuestion");
    const suggest = document.getElementById("chatSuggest");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let busy = false;

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // Close the mobile menu after a link is tapped
    document.querySelectorAll("#navLinks .nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            const menu = document.getElementById("navLinks");
            if (menu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });

    // The chat only exists on the home page; stop here on other pages
    if (!log) return;

    // ---------- Matching ----------
    function normalise(text) {
        return " " + text.toLowerCase().replace(/[^a-z0-9é'\s]/g, " ").replace(/\s+/g, " ").trim() + " ";
    }

    function getAnswer(question) {
        const q = normalise(question);
        let best = null;
        let bestScore = 0;

        KNOWLEDGE.forEach(function (entry) {
            let score = 0;
            entry.keywords.forEach(function (kw) {
                // whole-word match, longer phrases count for more
                if (q.indexOf(" " + kw + " ") !== -1) score += kw.length;
            });
            if (score > bestScore) {
                bestScore = score;
                best = entry;
            }
        });

        return best || FALLBACK;

        /*
         * LLM UPGRADE: swap the body of this function for something like
         *
         *   const res = await fetch("https://your-api.example.com/ask", {
         *       method: "POST",
         *       headers: { "Content-Type": "application/json" },
         *       body: JSON.stringify({ question }),
         *   });
         *   return await res.json();   // { answer, sources, followUps }
         *
         * and make getAnswer async. Keep your API key on the server, never here.
         */
    }

    // ---------- Rendering ----------
    function escapeHTML(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    function scrollDown() {
        log.scrollTop = log.scrollHeight;
    }

    function addUserMessage(text) {
        const msg = document.createElement("div");
        msg.className = "msg msg-user";
        msg.innerHTML = "<p>" + escapeHTML(text) + "</p>";
        log.appendChild(msg);
        scrollDown();
    }

    function addTyping() {
        const msg = document.createElement("div");
        msg.className = "msg msg-bot typing";
        msg.setAttribute("aria-label", "Writing a reply");
        msg.innerHTML = "<span></span><span></span><span></span>";
        log.appendChild(msg);
        scrollDown();
        return msg;
    }

    function addBotMessage(result) {
        const msg = document.createElement("div");
        msg.className = "msg msg-bot";
        let html = "<p>" + result.answer + "</p>";
        if (result.sources && result.sources.length) {
            html += '<p class="msg-sources"><i class="fas fa-link"></i> Source: ' +
                result.sources.map(escapeHTML).join(", ") + "</p>";
        }
        msg.innerHTML = html;
        log.appendChild(msg);
        scrollDown();
        renderSuggestions(result.followUps);
    }

    function renderSuggestions(list) {
        const items = (list && list.length) ? list : SUGGESTED_QUESTIONS;
        suggest.innerHTML = "";
        items.forEach(function (q) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "chip";
            btn.textContent = q;
            btn.addEventListener("click", function () { ask(q); });
            suggest.appendChild(btn);
        });
    }

    function ask(question) {
        const text = question.trim();
        if (!text || busy) return;
        busy = true;
        addUserMessage(text);
        input.value = "";

        const typing = addTyping();
        const delay = reduceMotion ? 0 : 450 + Math.random() * 350;
        setTimeout(function () {
            typing.remove();
            addBotMessage(getAnswer(text));
            busy = false;
            if (window.gtag) gtag("event", "chat_question", { question: text.slice(0, 100) });
        }, delay);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        ask(input.value);
    });

    // Start
    addBotMessage(GREETING);
    renderSuggestions(SUGGESTED_QUESTIONS);
})();
