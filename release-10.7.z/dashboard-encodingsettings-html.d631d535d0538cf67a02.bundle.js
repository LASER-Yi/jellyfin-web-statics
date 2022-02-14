(self.webpackChunk=self.webpackChunk||[]).push([[8602],{11801:function(e){e.exports='<div id="encodingSettingsPage" data-role="page" class="page type-interior playbackConfigurationPage withTabs"> <div> <div class="content-primary"> <form class="encodingSettingsForm"> <div class="verticalSection"> <div class="sectionTitleContainer flex align-items-center"> <h2 class="sectionTitle">${Transcoding}</h2> <a is="emby-linkbutton" rel="noopener noreferrer" class="raised button-alt headerHelpButton" target="_blank" href="https://docs.jellyfin.org/general/server/transcoding.html">${Help}</a> </div> </div> <div class="selectContainer"> <select is="emby-select" id="selectVideoDecoder" label="${LabelHardwareAccelerationType}"> <option value="">${None}</option> <option value="amf">AMD AMF</option> <option value="qsv">Intel Quick Sync</option> <option value="mediacodec">MediaCodec Android</option> <option value="omx">OpenMAX OMX</option> <option value="nvenc">Nvidia NVENC</option> <option value="vaapi">Video Acceleration API (VAAPI)</option> <option value="h264_v4l2m2m">Exynos V4L2 MFC</option> <option value="videotoolbox">Video ToolBox</option> </select> <div class="fieldDescription"> <a is="emby-linkbutton" rel="noopener noreferrer" class="button-link" href="https://docs.jellyfin.org/general/administration/hardware-acceleration.html" target="_blank">${LabelHardwareAccelerationTypeHelp}</a> </div> </div> <div class="inputContainer hide fldVaapiDevice"> <input is="emby-input" type="text" id="txtVaapiDevice" label="${LabelVaapiDevice}"/> <div class="fieldDescription">${LabelVaapiDeviceHelp}</div> </div> <div class="inputContainer hide fldOpenclDevice"> <input is="emby-input" type="text" id="txtOpenclDevice" label="${LabelOpenclDevice}"/> <div class="fieldDescription">${LabelOpenclDeviceHelp}</div> </div> <div class="hardwareAccelerationOptions hide"> <div class="checkboxListContainer decodingCodecsList"> <h3 class="checkboxListLabel">${LabelEnableHardwareDecodingFor}</h3> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="h264" data-types="amf,qsv,nvenc,vaapi,omx,mediacodec,videotoolbox"/> <span>H264</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="hevc" data-types="amf,qsv,nvenc,vaapi,mediacodec,videotoolbox"/> <span>HEVC</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="mpeg2video" data-types="amf,qsv,nvenc,vaapi,omx,mediacodec,videotoolbox"/> <span>MPEG2</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="mpeg4" data-types="amf,nvenc,omx,mediacodec,videotoolbox"/> <span>MPEG4</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="vc1" data-types="amf,qsv,nvenc,vaapi,omx,videotoolbox"/> <span>VC1</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="vp8" data-types="qsv,nvenc,vaapi,mediacodec,videotoolbox"/> <span>VP8</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkDecodeCodec" data-codec="vp9" data-types="amf,qsv,nvenc,vaapi,mediacodec,videotoolbox"/> <span>VP9</span> </label> </div> </div> <div class="checkboxListContainer"> <label> <input type="checkbox" is="emby-checkbox" id="chkDecodingColorDepth10Hevc"/> <span>${EnableDecodingColorDepth10Hevc}</span> </label> </div> <div class="checkboxListContainer"> <label> <input type="checkbox" is="emby-checkbox" id="chkDecodingColorDepth10Vp9"/> <span>${EnableDecodingColorDepth10Vp9}</span> </label> </div> <div class="checkboxListContainer hide fldEnhancedNvdec"> <label> <input type="checkbox" is="emby-checkbox" id="chkEnhancedNvdecDecoder"/> <span>${EnableEnhancedNvdecDecoder}</span> </label> </div> <div class="checkboxListContainer"> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" id="chkHardwareEncoding"/> <span>${EnableHardwareEncoding}</span> </label> </div> </div> </div> <div class="checkboxListContainer"> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" id="chkAllowHevcEncoding"/> <span>${AllowHevcEncoding}</span> </label> </div> </div> <div class="checkboxListContainer checkboxContainer-withDescription fldVppTonemapping hide"> <label> <input type="checkbox" is="emby-checkbox" id="chkVppTonemapping"/> <span>${EnableVppTonemapping}</span> </label> <div class="fieldDescription checkboxFieldDescription">${AllowVppTonemappingHelp}</div> </div> <div class="tonemappingOptions hide"> <div class="checkboxListContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkTonemapping"/> <span>${EnableTonemapping}</span> </label> <div class="fieldDescription checkboxFieldDescription">${AllowTonemappingHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectTonemappingAlgorithm" label="${LabelTonemappingAlgorithm}"> <option value="none">None</option> <option value="clip">Clip</option> <option value="linear">Linear</option> <option value="gamma">Gamma</option> <option value="reinhard">Reinhard</option> <option value="hable">Hable</option> <option value="mobius">Mobius</option> </select> <div class="fieldDescription"> <a is="emby-linkbutton" rel="noopener noreferrer" class="button-link" href="http://ffmpeg.org/ffmpeg-all.html#tonemap_005fopencl" target="_blank">${TonemappingAlgorithmHelp}</a> </div> </div> <div class="selectContainer"> <select is="emby-select" id="selectTonemappingRange" label="${LabelTonemappingRange}"> <option value="auto">${Auto}</option> <option value="tv">TV</option> <option value="pc">PC</option> </select> <div class="fieldDescription">${TonemappingRangeHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtTonemappingDesat" pattern="[0-9]*" min="0" max="1.79769e+308" step=".00001" label="${LabelTonemappingDesat}"/> <div class="fieldDescription">${LabelTonemappingDesatHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtTonemappingThreshold" pattern="[0-9]*" min="0" max="1.79769e+308" step=".00001" label="${LabelTonemappingThreshold}"/> <div class="fieldDescription">${LabelTonemappingThresholdHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtTonemappingPeak" pattern="[0-9]*" min="0" max="1.79769e+308" step=".00001" label="${LabelTonemappingPeak}"/> <div class="fieldDescription">${LabelTonemappingPeakHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtTonemappingParam" pattern="[0-9]*" min="2.22507e-308" max="1.79769e+308" step=".00001" label="${LabelTonemappingParam}"/> <div class="fieldDescription">${LabelTonemappingParamHelp}</div> </div> </div> <div class="selectContainer"> <select is="emby-select" id="selectThreadCount" label="${LabelTranscodingThreadCount}"> <option value="-1">${Auto}</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="0">${OptionMax}</option> </select> <div class="fieldDescription">${LabelTranscodingThreadCountHelp}</div> </div> <div class="inputContainer fldEncoderPath"> <div style="display:flex;align-items:center"> <div style="flex-grow:1"> <input is="emby-input" class="txtEncoderPath" label="${LabelffmpegPath}" autocomplete="off"/> </div> <button type="button" is="paper-icon-button-light" id="btnSelectEncoderPath" class="emby-input-iconbutton"><span class="material-icons search"></span></button> </div> <div class="fieldDescription"> <div>${LabelffmpegPathHelp}</div> </div> </div> <div class="inputContainer"> <div style="display:flex;align-items:center"> <div style="flex-grow:1"> <input is="emby-input" id="txtTranscodingTempPath" label="${LabelTranscodePath}" autocomplete="off"/> </div> <button type="button" is="paper-icon-button-light" id="btnSelectTranscodingTempPath" class="emby-input-iconbutton"><span class="material-icons search"></span></button> </div> <div class="fieldDescription">${LabelTranscodingTempPathHelp}</div> </div> <div class="inputContainer"> <div style="display:flex;align-items:center"> <div style="flex-grow:1"> <input is="emby-input" id="txtFallbackFontPath" label="${LabelFallbackFontPath}" autocomplete="off"/> </div> <button type="button" is="paper-icon-button-light" id="btnSelectFallbackFontPath" class="emby-input-iconbutton"><span class="material-icons search"></span></button> </div> <div class="fieldDescription">${LabelFallbackFontPathHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableFallbackFont"/> <span>${EnableFallbackFont}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableFallbackFontHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtDownMixAudioBoost" pattern="[0-9]*" required="required" min=".5" max="3" step=".1" label="${LabelDownMixAudioScale}"/> <div class="fieldDescription">${LabelDownMixAudioScaleHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtMaxMuxingQueueSize" pattern="[0-9]*" required="required" min="128" max="2147483647" step="1" label="${LabelMaxMuxingQueueSize}"/> <div class="fieldDescription">${LabelMaxMuxingQueueSizeHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectEncoderPreset" label="${LabelEncoderPreset}"> <option value="">${Auto}</option> <option value="veryslow">veryslow</option> <option value="slower">slower</option> <option value="slow">slow</option> <option value="medium">medium</option> <option value="fast">fast</option> <option value="faster">faster</option> <option value="veryfast">veryfast</option> <option value="superfast">superfast</option> <option value="ultrafast">ultrafast</option> </select> <div class="fieldDescription">${EncoderPresetHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtH265Crf" pattern="[0-9]*" min="0" max="51" step="1" label="${LabelH265Crf}"/> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtH264Crf" pattern="[0-9]*" min="0" max="51" step="1" label="${LabelH264Crf}"/> <div class="fieldDescription">${H264CrfHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectDeinterlaceMethod" label="${LabelDeinterlaceMethod}"> <option value="yadif">${Yadif}</option> <option value="bwdif">${Bwdif}</option> </select> <div class="fieldDescription">${DeinterlaceMethodHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkDoubleRateDeinterlacing"/> <span>${UseDoubleRateDeinterlacing}</span> </label> <div class="fieldDescription checkboxFieldDescription">${UseDoubleRateDeinterlacingHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableSubtitleExtraction"/> <span>${AllowOnTheFlySubtitleExtraction}</span> </label> <div class="fieldDescription checkboxFieldDescription">${AllowOnTheFlySubtitleExtractionHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableThrottling"/> <span>${AllowFfmpegThrottling}</span> </label> <div class="fieldDescription checkboxFieldDescription">${AllowFfmpegThrottlingHelp}</div> </div> <div> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${Save}</span> </button> </div> </form> </div> </div> </div> '}}]);