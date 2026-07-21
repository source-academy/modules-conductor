export default require => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => (key in obj) ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
  }) : obj[key] = value;
  var __require = (x => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a2, b) => (typeof require !== "undefined" ? require : a2)[b]
  }) : x)(function (x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
        get: () => from[key],
        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
      });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod));
  var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: true
  }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var index_exports = {};
  __export(index_exports, {
    adsr: () => adsr,
    bell: () => bell,
    cello: () => cello,
    consecutively: () => consecutively,
    get_duration: () => get_duration,
    get_left_wave: () => get_left_wave,
    get_right_wave: () => get_right_wave,
    init_record: () => init_record,
    is_sound: () => is_sound,
    letter_name_to_frequency: () => letter_name_to_frequency,
    letter_name_to_midi_note: () => letter_name_to_midi_note,
    make_sound: () => make_sound,
    make_stereo_sound: () => make_stereo_sound,
    midi_note_to_frequency: () => midi_note_to_frequency,
    noise_sound: () => noise_sound,
    pan: () => pan,
    pan_mod: () => pan_mod,
    phase_mod: () => phase_mod,
    piano: () => piano,
    play: () => play,
    play_in_tab: () => play_in_tab,
    play_wave: () => play_wave,
    play_waves: () => play_waves,
    record: () => record,
    record_for: () => record_for,
    sawtooth_sound: () => sawtooth_sound,
    silence_sound: () => silence_sound,
    simultaneously: () => simultaneously,
    sine_sound: () => sine_sound,
    square_sound: () => square_sound,
    squash: () => squash,
    stacking_adsr: () => stacking_adsr,
    stop: () => stop,
    triangle_sound: () => triangle_sound,
    trombone: () => trombone,
    violin: () => violin
  });
  var _;
  !(function (_2) {
    (_2.UNKNOWN = "__unknown", _2.INTERNAL = "__internal", _2.EVALUATOR = "__evaluator", _2.EVALUATOR_SYNTAX = "__evaluator_syntax", _2.EVALUATOR_TYPE = "__evaluator_type", _2.EVALUATOR_RUNTIME = "__evaluator_runtime");
  })(_ || (_ = {}));
  var o = class extends Error {
    constructor(r2) {
      super(r2);
      __publicField(this, "name", "ConductorError");
      __publicField(this, "errorType", _.UNKNOWN);
    }
  };
  var s = class extends o {
    constructor(r2, o3, s4, e3) {
      super(`${void 0 !== o3 ? `${e3 ? e3 + ":" : ""}${o3}${void 0 !== s4 ? ":" + s4 : ""}: ` : ""}${r2}`);
      __publicField(this, "name", "EvaluatorError");
      __publicField(this, "errorType", _.EVALUATOR);
      __publicField(this, "rawMessage");
      __publicField(this, "line");
      __publicField(this, "column");
      __publicField(this, "fileName");
      (this.rawMessage = r2, this.line = o3, this.column = s4, this.fileName = e3);
    }
  };
  function e(r2) {
    const t3 = (function (r3) {
      var _a;
      if ("string" == typeof r3) return JSON.stringify(r3);
      if ("number" == typeof r3 || "boolean" == typeof r3) return String(r3);
      if (null === r3) return "null";
      if (void 0 === r3) return "undefined";
      if ("bigint" == typeof r3) return `${r3}n`;
      if ("symbol" == typeof r3) return r3.toString();
      if ("function" == typeof r3) return r3.name ? `function ${r3.name}` : "anonymous function";
      try {
        return (_a = JSON.stringify(r3)) != null ? _a : Object.prototype.toString.call(r3);
      } catch (e3) {
        try {
          return String(r3);
        } catch (e4) {
          return Object.prototype.toString.call(r3);
        }
      }
    })(r2);
    return t3.length > 100 ? `${t3.slice(0, 100)}...` : t3;
  }
  var n = class extends s {
    constructor(r2, t3, n3, o3, u3, a2, i) {
      super(`${r2}: Expected ${n3}${t3 ? ` for ${t3}` : ""}, got ${e(o3)}.`, u3, a2, i);
      __publicField(this, "name", "EvaluatorParameterTypeError");
      __publicField(this, "errorType", _.EVALUATOR_TYPE);
      __publicField(this, "funcName");
      __publicField(this, "paramName");
      __publicField(this, "expected");
      __publicField(this, "actual");
      (this.funcName = r2, this.paramName = t3, this.expected = n3, this.actual = o3);
    }
  };
  var u = class extends n {
    constructor(r2, t3, e3, n3, o3, u3, a2) {
      super(e3, n3, (function (r3) {
        if ("string" == typeof r3) return r3;
        const {min: t4, max: e4, integer: n4 = true} = r3, o4 = n4 ? "integer" : "number";
        return void 0 !== t4 && void 0 !== e4 ? `${o4} \u2208 [${t4}, ${e4}]` : void 0 !== t4 ? `${o4} \u2265 ${t4}` : void 0 !== e4 ? `${o4} \u2264 ${e4}` : o4;
      })(t3), r2, o3, u3, a2);
      __publicField(this, "name", "EvaluatorNumberRangeError");
    }
  };
  var e2 = class extends s {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "EvaluatorRuntimeError");
      __publicField(this, "errorType", _.EVALUATOR_RUNTIME);
    }
  };
  function f(r2, o3, t3, e3 = true) {
    return "number" == typeof r2 && !Number.isNaN(r2) && (!(e3 && !Number.isInteger(r2)) && (!(void 0 !== o3 && r2 < o3) && !(void 0 !== t3 && r2 > t3)));
  }
  function m(r2, t3, e3, n3, i = true, u3) {
    if (!f(r2, e3, n3, i)) throw new u(r2, {
      min: e3,
      max: n3,
      integer: i
    }, t3, u3);
  }
  var Accidental;
  (function (Accidental2) {
    Accidental2["SHARP"] = "#";
    Accidental2["FLAT"] = "b";
    Accidental2["NATURAL"] = "\u266E";
  })(Accidental || (Accidental = {}));
  function parseNoteWithOctave(note) {
    if (typeof note !== "string") return null;
    const match = (/^([A-Ga-g])([#♮b]?)(\d*)$/).exec(note);
    if (match === null) return null;
    const [, noteName, accidental, octaveStr] = match;
    switch (accidental) {
      case Accidental.SHARP:
        {
          if (noteName === "B" || noteName === "E") return null;
          break;
        }
      case Accidental.FLAT:
        {
          if (noteName === "F" || noteName === "C") return null;
          break;
        }
    }
    const octave = octaveStr === "" ? 4 : parseInt(octaveStr);
    return [noteName.toUpperCase(), accidental !== "" ? accidental : Accidental.NATURAL, octave];
  }
  function noteToValues(note, func_name) {
    const res = parseNoteWithOctave(note);
    if (res === null) {
      throw new e2(`${func_name}: Invalid Note with Octave: ${note}`);
    }
    return res;
  }
  function letter_name_to_midi_note(note) {
    const [noteName, accidental, octave] = noteToValues(note, "letter_name_to_midi_note");
    let res = 12;
    switch (noteName) {
      case "C":
        break;
      case "D":
        res += 2;
        break;
      case "E":
        res += 4;
        break;
      case "F":
        res += 5;
        break;
      case "G":
        res += 7;
        break;
      case "A":
        res += 9;
        break;
      case "B":
        res += 11;
        break;
      default:
        break;
    }
    switch (accidental) {
      case Accidental.FLAT:
        {
          res -= 1;
          break;
        }
      case Accidental.SHARP:
        {
          res += 1;
          break;
        }
      case Accidental.NATURAL:
        break;
    }
    return res + 12 * octave;
  }
  function midi_note_to_frequency(note) {
    m(note, "midi_note_to_frequency");
    return 440 * Math.pow(2, (note - 69) / 12);
  }
  function letter_name_to_frequency(note) {
    return midi_note_to_frequency(letter_name_to_midi_note(note));
  }
  var SHARP = Accidental.SHARP;
  var FLAT = Accidental.FLAT;
  var NATURAL = Accidental.NATURAL;
  var import_rttcErrors = __require("js-slang/dist/errors/rttcErrors");
  var import_base = __require("js-slang/dist/errors/base");
  var import_rttc = __require("js-slang/dist/utils/rttc");
  var import_operators = __require("js-slang/dist/utils/operators");
  var import_context = __toESM(__require("js-slang/context"), 1);
  var import_list = __require("js-slang/dist/stdlib/list");
  var FastBase64 = {
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encLookup: String,
    Init: function () {
      for (var i = 0; i < 4096; i++) {
        this.encLookup[i] = this.chars[i >> 6] + this.chars[i & 63];
      }
    },
    Encode: function (src) {
      var len = src.length;
      var dst = "";
      var i = 0;
      var n3;
      while (len > 2) {
        n3 = src[i] << 16 | src[i + 1] << 8 | src[i + 2];
        dst += this.encLookup[n3 >> 12] + this.encLookup[n3 & 4095];
        len -= 3;
        i += 3;
      }
      if (len > 0) {
        var n1 = (src[i] & 252) >> 2;
        var n22 = (src[i] & 3) << 4;
        if (len > 1) n22 |= (src[++i] & 240) >> 4;
        dst += this.chars[n1];
        dst += this.chars[n22];
        if (len == 2) {
          var n32 = (src[i++] & 15) << 2;
          n32 |= (src[i] & 192) >> 6;
          dst += this.chars[n32];
        }
        if (len == 1) dst += "=";
        dst += "=";
      }
      return dst;
    }
  };
  FastBase64.Init();
  function RIFFWAVE(data) {
    this.data = [];
    this.wav = [];
    this.dataURI = "";
    this.header = {
      chunkId: [82, 73, 70, 70],
      chunkSize: 0,
      format: [87, 65, 86, 69],
      subChunk1Id: [102, 109, 116, 32],
      subChunk1Size: 16,
      audioFormat: 1,
      numChannels: 1,
      sampleRate: 8e3,
      byteRate: 0,
      blockAlign: 0,
      bitsPerSample: 8,
      subChunk2Id: [100, 97, 116, 97],
      subChunk2Size: 0
    };
    function u32ToArray(i) {
      return [i & 255, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255];
    }
    function u16ToArray(i) {
      return [i & 255, i >> 8 & 255];
    }
    function split16bitArray(data2) {
      var r2 = [];
      var j = 0;
      var len = data2.length;
      for (var i = 0; i < len; i++) {
        r2[j++] = data2[i] & 255;
        r2[j++] = data2[i] >> 8 & 255;
      }
      return r2;
    }
    this.Make = function (data2) {
      if (data2 instanceof Array) this.data = data2;
      this.header.blockAlign = this.header.numChannels * this.header.bitsPerSample >> 3;
      this.header.byteRate = this.header.blockAlign * this.sampleRate;
      this.header.subChunk2Size = this.data.length * (this.header.bitsPerSample >> 3);
      this.header.chunkSize = 36 + this.header.subChunk2Size;
      this.wav = this.header.chunkId.concat(u32ToArray(this.header.chunkSize), this.header.format, this.header.subChunk1Id, u32ToArray(this.header.subChunk1Size), u16ToArray(this.header.audioFormat), u16ToArray(this.header.numChannels), u32ToArray(this.header.sampleRate), u32ToArray(this.header.byteRate), u16ToArray(this.header.blockAlign), u16ToArray(this.header.bitsPerSample), this.header.subChunk2Id, u32ToArray(this.header.subChunk2Size), this.header.bitsPerSample == 16 ? split16bitArray(this.data) : this.data);
      this.dataURI = "data:audio/wav;base64," + FastBase64.Encode(this.wav);
    };
    if (data instanceof Array) this.Make(data);
  }
  var FS = 44100;
  var fourier_expansion_level = 5;
  var audioPlayed = [];
  import_context.default.moduleContexts.stereo_sound.state = {
    audioPlayed
  };
  var audioplayer;
  var isPlaying;
  function init_audioCtx() {
    audioplayer = new window.AudioContext();
  }
  function linear_decay(decay_period) {
    return t3 => {
      if (t3 > decay_period || t3 < 0) {
        return 0;
      }
      return 1 - t3 / decay_period;
    };
  }
  var permission;
  var recorded_sound;
  function check_permission() {
    if (permission === void 0) {
      throw new import_base.GeneralRuntimeError("Call init_record(); to obtain permission to use microphone");
    } else if (permission === false) {
      throw new import_base.GeneralRuntimeError(`Permission has been denied.

        Re-start browser and call init_record();

        to obtain permission to use microphone.`);
    }
  }
  var globalStream;
  function rememberStream(stream) {
    permission = true;
    globalStream = stream;
  }
  function setPermissionToFalse() {
    permission = false;
  }
  function start_recording(mediaRecorder) {
    const data = [];
    mediaRecorder.ondataavailable = e3 => e3.data.size && data.push(e3.data);
    mediaRecorder.start();
    mediaRecorder.onstop = () => process(data);
  }
  var recording_signal_duration_ms = 100;
  function play_recording_signal() {
    play(sine_sound(1200, recording_signal_duration_ms / 1e3));
  }
  function process(data) {
    const audioContext = new AudioContext();
    const blob = new Blob(data);
    convertToArrayBuffer(blob).then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer)).then(save);
  }
  function convertToArrayBuffer(blob) {
    const url = URL.createObjectURL(blob);
    return fetch(url).then(response => response.arrayBuffer());
  }
  function save(audioBuffer) {
    const array = audioBuffer.getChannelData(0);
    const duration = array.length / FS;
    recorded_sound = make_sound(t3 => {
      const index = t3 * FS;
      const lowerIndex = Math.floor(index);
      const upperIndex = lowerIndex + 1;
      const ratio = index - lowerIndex;
      const upper = array[upperIndex] ? array[upperIndex] : 0;
      const lower = array[lowerIndex] ? array[lowerIndex] : 0;
      return lower * (1 - ratio) + upper * ratio;
    }, duration);
  }
  function init_record() {
    navigator.mediaDevices.getUserMedia({
      audio: true
    }).then(rememberStream, setPermissionToFalse);
    return "obtaining recording permission";
  }
  function record(buffer) {
    check_permission();
    const mediaRecorder = new MediaRecorder(globalStream);
    setTimeout(() => {
      play_recording_signal();
      start_recording(mediaRecorder);
    }, recording_signal_duration_ms + buffer * 1e3);
    return () => {
      mediaRecorder.stop();
      play_recording_signal();
      return () => {
        if (recorded_sound === void 0) {
          throw new import_base.GeneralRuntimeError("recording still being processed");
        } else {
          return recorded_sound;
        }
      };
    };
  }
  function record_for(duration, buffer) {
    recorded_sound = void 0;
    const duration_ms = duration * 1e3;
    check_permission();
    const mediaRecorder = new MediaRecorder(globalStream);
    setTimeout(() => {
      play_recording_signal();
      start_recording(mediaRecorder);
      setTimeout(() => {
        mediaRecorder.stop();
        play_recording_signal();
      }, duration_ms);
    }, recording_signal_duration_ms + buffer * 1e3);
    return () => {
      if (recorded_sound === void 0) {
        throw new import_base.GeneralRuntimeError("recording still being processed");
      } else {
        return recorded_sound;
      }
    };
  }
  function validateDuration(func_name, duration, param_name) {
    (0, import_rttc.assertNumberWithinRange)(duration, func_name, 0, void 0, true, param_name);
  }
  function validateWave(func_name, wave, lr) {
    if (typeof wave !== "function") {
      throw new import_rttcErrors.InvalidParameterTypeError("Wave", wave, func_name, lr === void 0 ? void 0 : `${lr} wave`);
    }
  }
  function make_stereo_sound(left_wave, right_wave, duration) {
    validateDuration(make_sound.name, duration);
    validateWave(make_sound.name, left_wave, "left");
    validateWave(make_sound.name, right_wave, "right");
    return (0, import_list.pair)((0, import_list.pair)(t3 => t3 >= duration ? 0 : left_wave(t3), t3 => t3 >= duration ? 0 : right_wave(t3)), duration);
  }
  function make_sound(wave, duration) {
    validateDuration(make_sound.name, duration);
    validateWave(make_sound.name, wave);
    return (0, import_list.pair)((0, import_list.pair)(t3 => t3 >= duration ? 0 : wave(t3), t3 => t3 >= duration ? 0 : wave(t3)), duration);
  }
  function get_left_wave(sound) {
    return (0, import_list.head)((0, import_list.head)(sound));
  }
  function get_right_wave(sound) {
    return (0, import_list.tail)((0, import_list.head)(sound));
  }
  function get_duration(sound) {
    return (0, import_list.tail)(sound);
  }
  function is_sound(x) {
    if (!(0, import_list.is_pair)(x)) return false;
    const waves = (0, import_list.head)(x);
    if (!(0, import_list.is_pair)(waves)) return false;
    const left_wave = (0, import_list.head)(waves);
    if (!(0, import_rttc.isFunctionOfLength)(left_wave, 1)) return false;
    const right_wave = (0, import_list.tail)(waves);
    if (!(0, import_rttc.isFunctionOfLength)(right_wave, 1)) return false;
    const duration = (0, import_list.tail)(x);
    return typeof duration === "number";
  }
  function throwIfNotSound(obj, func_name, param_name) {
    if (!(0, import_list.is_pair)(obj)) {
      throw new import_rttcErrors.InvalidParameterTypeError("sound", obj, func_name, param_name);
    }
    const waves = (0, import_list.head)(obj);
    if (!(0, import_list.is_pair)(waves)) {
      throw new import_base.GeneralRuntimeError(`${func_name}: head of sound should be a pair of waves.`);
    }
    const left_wave = (0, import_list.head)(waves);
    if (!(0, import_rttc.isFunctionOfLength)(left_wave, 1)) {
      throw new import_base.GeneralRuntimeError(`${func_name}: left wave is not a valid wave.`);
    }
    const right_wave = (0, import_list.tail)(waves);
    if (!(0, import_rttc.isFunctionOfLength)(right_wave, 1)) {
      throw new import_base.GeneralRuntimeError(`${func_name}: right wave is not a valid wave.`);
    }
    const duration = (0, import_list.tail)(obj);
    if (typeof duration !== "number") {
      throw new import_base.GeneralRuntimeError(`${func_name}: Duration of sound is not a number!`);
    }
  }
  function play_wave(wave, duration) {
    validateDuration(play_wave.name, duration);
    validateWave(play_wave.name, wave);
    return play(make_sound(wave, duration));
  }
  function play_waves(left_wave, right_wave, duration) {
    validateDuration(make_sound.name, duration);
    validateWave(make_sound.name, left_wave, "left");
    validateWave(make_sound.name, right_wave, "right");
    return play(make_stereo_sound(left_wave, right_wave, duration));
  }
  function play_in_tab(sound) {
    throwIfNotSound(sound, play_in_tab.name);
    if (isPlaying) {
      throw new import_base.GeneralRuntimeError(`${play_in_tab.name}: audio system still playing previous sound`);
    }
    const duration = get_duration(sound);
    if (duration < 0) {
      throw new import_base.GeneralRuntimeError(`${play_in_tab.name}: duration of sound is negative`);
    } else if (duration === 0) {
      return sound;
    }
    if (!audioplayer) {
      init_audioCtx();
    }
    const channel = [];
    const len = Math.ceil(FS * duration);
    let Ltemp;
    let Rtemp;
    let Lprev_value = 0;
    let Rprev_value = 0;
    const left_wave = get_left_wave(sound);
    const right_wave = get_right_wave(sound);
    for (let i = 0; i < len; i += 1) {
      Ltemp = (0, import_operators.callWithoutMetadata)(left_wave, i / FS);
      if (Ltemp > 1) {
        channel[2 * i] = 1;
      } else if (Ltemp < -1) {
        channel[2 * i] = -1;
      } else {
        channel[2 * i] = Ltemp;
      }
      if (channel[2 * i] === 0 && Math.abs(channel[2 * i] - Lprev_value) > 0.01) {
        channel[2 * i] = Lprev_value * 0.999;
      }
      Lprev_value = channel[2 * i];
      Rtemp = (0, import_operators.callWithoutMetadata)(right_wave, i / FS);
      if (Rtemp > 1) {
        channel[2 * i + 1] = 1;
      } else if (Rtemp < -1) {
        channel[2 * i + 1] = -1;
      } else {
        channel[2 * i + 1] = Rtemp;
      }
      if (channel[2 * i + 1] === 0 && Math.abs(channel[2 * i] - Rprev_value) > 0.01) {
        channel[2 * i + 1] = Rprev_value * 0.999;
      }
      Rprev_value = channel[2 * i + 1];
    }
    for (let i = 0; i < channel.length; i += 1) {
      channel[i] = Math.floor(channel[i] * 32767.999);
    }
    const riffwave = new RIFFWAVE([]);
    riffwave.header.sampleRate = FS;
    riffwave.header.numChannels = 2;
    riffwave.header.bitsPerSample = 16;
    riffwave.Make(channel);
    const audio = {
      toReplString: () => "<AudioPlayed>",
      dataUri: riffwave.dataURI
    };
    audioPlayed.push(audio);
    return sound;
  }
  function play(sound) {
    throwIfNotSound(sound, play.name);
    if (isPlaying) {
      throw new import_base.GeneralRuntimeError(`${play.name}: audio system still playing previous sound`);
    }
    const duration = get_duration(sound);
    if (duration < 0) {
      throw new import_base.GeneralRuntimeError(`${play.name}: duration of sound is negative`);
    } else if (duration === 0) {
      return sound;
    }
    if (!audioplayer) {
      init_audioCtx();
    }
    const channel = [];
    const len = Math.ceil(FS * duration);
    let Ltemp;
    let Rtemp;
    let Lprev_value = 0;
    let Rprev_value = 0;
    const left_wave = get_left_wave(sound);
    const right_wave = get_right_wave(sound);
    for (let i = 0; i < len; i += 1) {
      Ltemp = (0, import_operators.callWithoutMetadata)(left_wave, i / FS);
      if (Ltemp > 1) {
        channel[2 * i] = 1;
      } else if (Ltemp < -1) {
        channel[2 * i] = -1;
      } else {
        channel[2 * i] = Ltemp;
      }
      if (channel[2 * i] === 0 && Math.abs(channel[2 * i] - Lprev_value) > 0.01) {
        channel[2 * i] = Lprev_value * 0.999;
      }
      Lprev_value = channel[2 * i];
      Rtemp = (0, import_operators.callWithoutMetadata)(right_wave, i / FS);
      if (Rtemp > 1) {
        channel[2 * i + 1] = 1;
      } else if (Rtemp < -1) {
        channel[2 * i + 1] = -1;
      } else {
        channel[2 * i + 1] = Rtemp;
      }
      if (channel[2 * i + 1] === 0 && Math.abs(channel[2 * i] - Rprev_value) > 0.01) {
        channel[2 * i + 1] = Rprev_value * 0.999;
      }
      Rprev_value = channel[2 * i + 1];
    }
    for (let i = 0; i < channel.length; i += 1) {
      channel[i] = Math.floor(channel[i] * 32767.999);
    }
    const riffwave = new RIFFWAVE([]);
    riffwave.header.sampleRate = FS;
    riffwave.header.numChannels = 2;
    riffwave.header.bitsPerSample = 16;
    riffwave.Make(channel);
    const audio = new Audio(riffwave.dataURI);
    const source2 = audioplayer.createMediaElementSource(audio);
    source2.connect(audioplayer.destination);
    audio.play();
    isPlaying = true;
    audio.onended = () => {
      source2.disconnect(audioplayer.destination);
      isPlaying = false;
    };
    return sound;
  }
  function stop() {
    audioplayer.close();
    isPlaying = false;
  }
  function squash(sound) {
    const left = x => (0, import_operators.callWithoutMetadata)(get_left_wave(sound), x);
    const right = x => (0, import_operators.callWithoutMetadata)(get_right_wave(sound), x);
    return make_sound(t3 => 0.5 * (left(t3) + right(t3)), get_duration(sound));
  }
  function pan(amount) {
    return sound => {
      const left_wave = get_left_wave(sound);
      const right_wave = get_right_wave(sound);
      if (amount > 1) {
        amount = 1;
      }
      if (amount < -1) {
        amount = -1;
      }
      sound = squash(sound);
      return make_stereo_sound(t3 => (1 - amount) / 2 * (0, import_operators.callWithoutMetadata)(left_wave, t3), t3 => (1 + amount) / 2 * (0, import_operators.callWithoutMetadata)(right_wave, t3), get_duration(sound));
    };
  }
  function pan_mod(modulator) {
    const mod_left_wave = x => (0, import_operators.callWithoutMetadata)(get_left_wave(modulator), x);
    const mod_right_wave = x => (0, import_operators.callWithoutMetadata)(get_right_wave(modulator), x);
    const amount = t3 => {
      let output = mod_left_wave(t3) + mod_right_wave(t3);
      if (output > 1) {
        output = 1;
      }
      if (output < -1) {
        output = -1;
      }
      return output;
    };
    return sound => {
      const left_wave = get_left_wave(sound);
      const right_wave = get_right_wave(sound);
      sound = squash(sound);
      return make_stereo_sound(t3 => (1 - amount(t3)) / 2 * (0, import_operators.callWithoutMetadata)(left_wave, t3), t3 => (1 + amount(t3)) / 2 * (0, import_operators.callWithoutMetadata)(right_wave, t3), get_duration(sound));
    };
  }
  function noise_sound(duration) {
    validateDuration(noise_sound.name, duration);
    return make_sound(_t => Math.random() * 2 - 1, duration);
  }
  function silence_sound(duration) {
    validateDuration(silence_sound.name, duration);
    return make_sound(_t => 0, duration);
  }
  function sine_sound(freq, duration) {
    validateDuration(sine_sound.name, duration);
    return make_sound(t3 => Math.sin(2 * Math.PI * t3 * freq), duration);
  }
  function square_sound(f2, duration) {
    validateDuration(square_sound.name, duration);
    function fourier_expansion_square(t3) {
      let answer = 0;
      for (let i = 1; i <= fourier_expansion_level; i += 1) {
        answer += Math.sin(2 * Math.PI * (2 * i - 1) * f2 * t3) / (2 * i - 1);
      }
      return answer;
    }
    return make_sound(t3 => 4 / Math.PI * fourier_expansion_square(t3), duration);
  }
  function triangle_sound(freq, duration) {
    validateDuration(triangle_sound.name, duration);
    function fourier_expansion_triangle(t3) {
      let answer = 0;
      for (let i = 0; i < fourier_expansion_level; i += 1) {
        answer += __pow(-1, i) * Math.sin((2 * i + 1) * t3 * freq * Math.PI * 2) / __pow(2 * i + 1, 2);
      }
      return answer;
    }
    return make_sound(t3 => 8 / Math.PI / Math.PI * fourier_expansion_triangle(t3), duration);
  }
  function sawtooth_sound(freq, duration) {
    validateDuration(sawtooth_sound.name, duration);
    function fourier_expansion_sawtooth(t3) {
      let answer = 0;
      for (let i = 1; i <= fourier_expansion_level; i += 1) {
        answer += Math.sin(2 * Math.PI * i * freq * t3) / i;
      }
      return answer;
    }
    return make_sound(t3 => 1 / 2 - 1 / Math.PI * fourier_expansion_sawtooth(t3), duration);
  }
  function consecutively(list_of_sounds) {
    function stereo_cons_two(sound1, sound2) {
      const Lwave1 = x => (0, import_operators.callWithoutMetadata)(get_left_wave(sound1), x);
      const Rwave1 = x => (0, import_operators.callWithoutMetadata)(get_right_wave(sound1), x);
      const Lwave2 = x => (0, import_operators.callWithoutMetadata)(get_left_wave(sound2), x);
      const Rwave2 = x => (0, import_operators.callWithoutMetadata)(get_right_wave(sound2), x);
      const dur1 = get_duration(sound1);
      const dur2 = get_duration(sound2);
      const new_left = t3 => t3 < dur1 ? Lwave1(t3) : Lwave2(t3 - dur1);
      const new_right = t3 => t3 < dur1 ? Rwave1(t3) : Rwave2(t3 - dur1);
      return make_stereo_sound(new_left, new_right, dur1 + dur2);
    }
    return (0, import_list.accumulate)(stereo_cons_two, silence_sound(0), list_of_sounds);
  }
  function simultaneously(list_of_sounds) {
    function stereo_simul_two(sound1, sound2) {
      const Lwave1 = get_left_wave(sound1);
      const Rwave1 = get_right_wave(sound1);
      const Lwave2 = get_left_wave(sound2);
      const Rwave2 = get_right_wave(sound2);
      const dur1 = get_duration(sound1);
      const dur2 = get_duration(sound2);
      const new_left = t3 => {
        let sum = 0;
        if (t3 <= dur1) {
          sum += Lwave1(t3);
        }
        if (t3 <= dur2) {
          sum += Lwave2(t3);
        }
        return sum;
      };
      const new_right = t3 => {
        let sum = 0;
        if (t3 <= dur1) {
          sum += Rwave1(t3);
        }
        if (t3 <= dur2) {
          sum += Rwave2(t3);
        }
        return sum;
      };
      const new_dur = Math.max(dur1, dur2);
      return make_stereo_sound(new_left, new_right, new_dur);
    }
    const unnormed = (0, import_list.accumulate)(stereo_simul_two, silence_sound(0), list_of_sounds);
    const sounds_length = (0, import_list.length)(list_of_sounds);
    const normalised_left = t3 => (0, import_list.head)((0, import_list.head)(unnormed))(t3) / sounds_length;
    const normalised_right = t3 => (0, import_list.tail)((0, import_list.head)(unnormed))(t3) / sounds_length;
    const highest_duration = (0, import_list.tail)(unnormed);
    return make_stereo_sound(normalised_left, normalised_right, highest_duration);
  }
  function adsr(attack_ratio, decay_ratio, sustain_level, release_ratio) {
    return sound => {
      const Lwave = get_left_wave(sound);
      const Rwave = get_right_wave(sound);
      const duration = get_duration(sound);
      const attack_time = duration * attack_ratio;
      const decay_time = duration * decay_ratio;
      const release_time = duration * release_ratio;
      function adsrHelper(wave) {
        return x => {
          if (x < attack_time) {
            return (0, import_operators.callWithoutMetadata)(wave, x) * (x / attack_time);
          }
          if (x < attack_time + decay_time) {
            return ((1 - sustain_level) * linear_decay(decay_time)(x - attack_time) + sustain_level) * (0, import_operators.callWithoutMetadata)(wave, x);
          }
          if (x < duration - release_time) {
            return (0, import_operators.callWithoutMetadata)(wave, x) * sustain_level;
          }
          return (0, import_operators.callWithoutMetadata)(wave, x) * sustain_level * linear_decay(release_time)(x - (duration - release_time));
        };
      }
      return make_stereo_sound(adsrHelper(Lwave), adsrHelper(Rwave), duration);
    };
  }
  function stacking_adsr(waveform, base_frequency, duration, envelopes) {
    function zip(lst, n3) {
      if ((0, import_list.is_null)(lst)) {
        return lst;
      }
      return (0, import_list.pair)((0, import_list.pair)(n3, (0, import_list.head)(lst)), zip((0, import_list.tail)(lst), n3 + 1));
    }
    const new_list = (0, import_list.map)(x => (0, import_list.tail)(x)((0, import_operators.callWithoutMetadata)(waveform, base_frequency * (0, import_list.head)(x), duration)), zip(envelopes, 1));
    return simultaneously(new_list);
  }
  function phase_mod(freq, duration, amount) {
    return modulator => {
      const left_wave = get_left_wave(modulator);
      const right_wave = get_left_wave(modulator);
      return make_stereo_sound(t3 => Math.sin(2 * Math.PI * t3 * freq + amount * (0, import_operators.callWithoutMetadata)(left_wave, t3)), t3 => Math.sin(2 * Math.PI * t3 * freq + amount * (0, import_operators.callWithoutMetadata)(right_wave, t3)), duration);
    };
  }
  function bell(note, duration) {
    return stacking_adsr(square_sound, midi_note_to_frequency(note), duration, (0, import_list.list)(adsr(0, 0.6, 0, 0.05), adsr(0, 0.6618, 0, 0.05), adsr(0, 0.7618, 0, 0.05), adsr(0, 0.9071, 0, 0.05)));
  }
  function cello(note, duration) {
    return stacking_adsr(square_sound, midi_note_to_frequency(note), duration, (0, import_list.list)(adsr(0.05, 0, 1, 0.1), adsr(0.05, 0, 1, 0.15), adsr(0, 0, 0.2, 0.15)));
  }
  function piano(note, duration) {
    return stacking_adsr(triangle_sound, midi_note_to_frequency(note), duration, (0, import_list.list)(adsr(0, 0.515, 0, 0.05), adsr(0, 0.32, 0, 0.05), adsr(0, 0.2, 0, 0.05)));
  }
  function trombone(note, duration) {
    return stacking_adsr(square_sound, midi_note_to_frequency(note), duration, (0, import_list.list)(adsr(0.2, 0, 1, 0.1), adsr(0.3236, 0.6, 0, 0.1)));
  }
  function violin(note, duration) {
    return stacking_adsr(sawtooth_sound, midi_note_to_frequency(note), duration, (0, import_list.list)(adsr(0.35, 0, 1, 0.15), adsr(0.35, 0, 1, 0.15), adsr(0.45, 0, 1, 0.15), adsr(0.45, 0, 1, 0.15)));
  }
  return __toCommonJS(index_exports);
};