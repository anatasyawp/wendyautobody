import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, PhoneCall, MapPin, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Halo! Selamat datang di Wendy Autobody Padang. Ada yang bisa kami bantu seputar perbaikan bodi, cat mobil, atau estimasi biaya?',
      time: 'Baru saja',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    'Biaya cat per panel berapa?',
    'Alamat workshop & rute gmaps',
    'Berapa lama estimasi pengerjaan?',
    'Apakah melayani ketok magic / PDR?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateBotReply = (userQuery) => {
    const q = userQuery.toLowerCase();

    if (q.includes('biaya') || q.includes('harga') || q.includes('tarif') || q.includes('ongkos') || q.includes('panel')) {
      return (
        'Biaya perbaikan bodi & cat mobil disesuaikan dengan tingkat kerusakan, luas panel, serta jenis bahan/pernis yang digunakan. ' +
        'Untuk estimasi akurat dan transparan, Anda dapat mengirimkan foto benturan/goresan langsung via WhatsApp kami di ' +
        siteConfig.contact.phoneDisplay + '.'
      );
    }

    if (q.includes('alamat') || q.includes('lokasi') || q.includes('gmaps') || q.includes('maps') || q.includes('tempat') || q.includes('bengkel')) {
      return (
        `Workshop kami berlokasi di:\n${siteConfig.contact.address}\n\nAnda dapat langsung membuka rute Google Maps melalui tombol rute di bawah atau mengunjungi halaman Kontak.`
      );
    }

    if (q.includes('lama') || q.includes('waktu') || q.includes('berapa hari') || q.includes('estimasi')) {
      return (
        'Waktu pengerjaan bervariasi:\n• Spot repair / goresan ringan: 1 - 2 hari kerja\n• Perbaikan panel & cat oven: 2 - 4 hari kerja\n• Full body repaint / tabrakan berat: 1 - 2 minggu tergantung pasokan suku cadang dan tahap pengeringan oven.'
      );
    }

    if (q.includes('pdr') || q.includes('ketok') || q.includes('penyok') || q.includes('dent')) {
      return (
        'Kami menangani perbaikan penyok ringan hingga berat (dent pulling, spot welding realignment) tanpa merusak struktur orisinal kendaraan, dilanjutkan pengecatan oven berkualitas tinggi.'
      );
    }

    if (q.includes('jam') || q.includes('buka') || q.includes('tutup') || q.includes('operasional')) {
      return `Jam operasional workshop Wendy Autobody:\n${siteConfig.contact.hours}. Silakan kunjungi atau hubungi kami pada jam tersebut.`;
    }

    return (
      `Terima kasih atas pertanyaannya! Tim teknisi Wendy Autobody siap membantu pengecekan langsung. Anda juga bisa langsung chat WhatsApp di ${siteConfig.contact.phoneDisplay} untuk konsultasi cepat.`
    );
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = generateBotReply(text);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-brand-orange text-white shadow-2xl hover:bg-brand-orange-hover hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-brand-orange/40"
          aria-label="Buka Chat Asisten Wendy Autobody"
          title="Tanya Wendy Autobody"
        >
          {/* Animated pulse badge */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-brand-surface" />
          </span>

          <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />

          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-brand-card text-brand-text border border-brand-border text-xs px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none font-medium">
            Tanya Wendy Autobody Bot
          </span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-brand-surface border border-brand-border shadow-2xl flex flex-col overflow-hidden animate-fadeIn duration-200">
          {/* Header */}
          <div className="bg-brand-card border-b border-brand-border p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 border border-brand-orange/40 flex items-center justify-center text-brand-orange">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-brand-text uppercase tracking-wider">
                    Wendy Autobody AI
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <p className="text-[10px] text-brand-muted">
                  Online • Asisten Perbaikan & Pengecatan
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-brand-muted hover:text-brand-text hover:bg-brand-surface border border-transparent hover:border-brand-border transition-colors"
              aria-label="Tutup Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-brand-dark/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-brand-orange text-white rounded-tl-xl rounded-bl-xl rounded-tr-sm shadow-md'
                      : 'bg-brand-card text-brand-text border border-brand-border rounded-tr-xl rounded-br-xl rounded-tl-sm shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[9px] text-brand-muted mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-brand-card border border-brand-border text-brand-muted text-xs max-w-[120px] rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="p-2.5 bg-brand-card/90 border-t border-brand-border flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange shrink-0 ml-1" />
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap px-2.5 py-1 bg-brand-surface border border-brand-border hover:border-brand-orange text-brand-muted hover:text-brand-text transition-colors rounded-none shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Direct CTA Links inside chat */}
          <div className="px-4 py-2 bg-brand-surface border-t border-brand-border/60 flex items-center justify-between text-[11px]">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Halo%20Wendy%20Autobody,%20saya%20ingin%20konsultasi%20langsung.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:underline font-semibold flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Chat CS WhatsApp</span>
            </a>
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-brand-text flex items-center gap-1 transition-colors"
            >
              <MapPin className="w-3 h-3 text-brand-orange" />
              <span>Rute Google Maps</span>
            </a>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-brand-card border-t border-brand-border flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Tulis pesan pertanyaan..."
              className="flex-1 bg-brand-surface border border-brand-border px-3.5 py-2 text-xs text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-orange transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 bg-brand-orange text-white hover:bg-brand-orange-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Kirim Pesan"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
