/* eslint-disable camelcase */
/* eslint-disable brace-style */
/* eslint-disable no-sparse-arrays */

// code generated by pbf v4.0.1
// npx pbf usvg_tree.proto --no-write --jsdoc

/**
 * @typedef {import("pbf")} Pbf
 */

/** @enum {number} */
export const PathRule = {
    "PATH_RULE_UNSPECIFIED": 0,
    "PATH_RULE_NON_ZERO": 1,
    "PATH_RULE_EVEN_ODD": 2
};

/** @enum {number} */
export const LineCap = {
    "LINE_CAP_UNSPECIFIED": 0,
    "LINE_CAP_BUTT": 1,
    "LINE_CAP_ROUND": 2,
    "LINE_CAP_SQUARE": 3
};

/** @enum {number} */
export const LineJoin = {
    "LINE_JOIN_UNSPECIFIED": 0,
    "LINE_JOIN_MITER": 1,
    "LINE_JOIN_MITER_CLIP": 2,
    "LINE_JOIN_ROUND": 3,
    "LINE_JOIN_BEVEL": 4
};

/** @enum {number} */
export const PaintOrder = {
    "PAINT_ORDER_UNSPECIFIED": 0,
    "PAINT_ORDER_FILL_AND_STROKE": 1,
    "PAINT_ORDER_STROKE_AND_FILL": 2
};

/** @enum {number} */
export const PathCommand = {
    "PATH_COMMAND_UNSPECIFIED": 0,
    "PATH_COMMAND_MOVE": 1,
    "PATH_COMMAND_LINE": 2,
    "PATH_COMMAND_QUAD": 3,
    "PATH_COMMAND_CUBIC": 4,
    "PATH_COMMAND_CLOSE": 5
};

/** @enum {number} */
export const SpreadMethod = {
    "SPREAD_METHOD_UNSPECIFIED": 0,
    "SPREAD_METHOD_PAD": 1,
    "SPREAD_METHOD_REFLECT": 2,
    "SPREAD_METHOD_REPEAT": 3
};

/** @enum {number} */
export const MaskType = {
    "MASK_TYPE_UNSPECIFIED": 0,
    "MASK_TYPE_LUMINANCE": 1,
    "MASK_TYPE_ALPHA": 2
};

/**
 * @typedef {object} IconSet
 * @property {Icon[]} icons
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {IconSet}
 */
export function readIconSet(pbf, end) {
    return pbf.readFields(readIconSetField, {icons: []}, end);
}

/**
 * @param {number} tag
 * @param {IconSet} obj
 * @param {Pbf} pbf
 */
function readIconSetField(tag, obj, pbf) {
    if (tag === 1) obj.icons.push(readIcon(pbf, pbf.readVarint() + pbf.pos));
}

/**
 * @typedef {object} Icon
 * @property {string} name
 * @property {IconMetadata} [metadata]
 * @property {UsvgTree} [usvg_tree]
 * @property {"usvg_tree"} [data]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Icon}
 */
export function readIcon(pbf, end) {
    return pbf.readFields(readIconField, {name: undefined}, end);
}

/**
 * @param {number} tag
 * @param {Icon} obj
 * @param {Pbf} pbf
 */
function readIconField(tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) obj.metadata = readIconMetadata(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 3) { obj.usvg_tree = readUsvgTree(pbf, pbf.readVarint() + pbf.pos); obj.data = "usvg_tree"; }
}

/**
 * @typedef {object} IconMetadata
 * @property {number[]} stretch_x
 * @property {number[]} stretch_y
 * @property {ContentArea} [content_area]
 * @property {Variable[]} variables
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {IconMetadata}
 */
export function readIconMetadata(pbf, end) {
    return pbf.readFields(readIconMetadataField, {stretch_x: [], stretch_y: [], variables: []}, end);
}

/**
 * @param {number} tag
 * @param {IconMetadata} obj
 * @param {Pbf} pbf
 */
function readIconMetadataField(tag, obj, pbf) {
    if (tag === 1) pbf.readPackedVarint(obj.stretch_x);
    else if (tag === 2) pbf.readPackedVarint(obj.stretch_y);
    else if (tag === 3) obj.content_area = readContentArea(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 4) obj.variables.push(readVariable(pbf, pbf.readVarint() + pbf.pos));
}

/**
 * @typedef {object} ContentArea
 * @property {number} [left]
 * @property {number} [width]
 * @property {number} [top]
 * @property {number} [height]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {ContentArea}
 */
export function readContentArea(pbf, end) {
    return pbf.readFields(readContentAreaField, {left: 0}, end);
}

/**
 * @param {number} tag
 * @param {ContentArea} obj
 * @param {Pbf} pbf
 */
function readContentAreaField(tag, obj, pbf) {
    if (tag === 1) obj.left = pbf.readVarint();
    else if (tag === 2) obj.width = pbf.readVarint();
    else if (tag === 3) obj.top = pbf.readVarint();
    else if (tag === 4) obj.height = pbf.readVarint();
}

/**
 * @typedef {object} Variable
 * @property {string} name
 * @property {number} [rgb_color]
 * @property {"rgb_color"} [value]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Variable}
 */
export function readVariable(pbf, end) {
    return pbf.readFields(readVariableField, {name: undefined}, end);
}

/**
 * @param {number} tag
 * @param {Variable} obj
 * @param {Pbf} pbf
 */
function readVariableField(tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) { obj.rgb_color = pbf.readVarint(); obj.value = "rgb_color"; }
}

/**
 * @typedef {object} UsvgTree
 * @property {number} [width]
 * @property {number} [height]
 * @property {Node[]} children
 * @property {LinearGradient[]} linear_gradients
 * @property {RadialGradient[]} radial_gradients
 * @property {ClipPath[]} clip_paths
 * @property {Mask[]} masks
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {UsvgTree}
 */
export function readUsvgTree(pbf, end) {
    return pbf.readFields(readUsvgTreeField, {width: 20, children: [], linear_gradients: [], radial_gradients: [], clip_paths: [], masks: []}, end);
}

/**
 * @param {number} tag
 * @param {UsvgTree} obj
 * @param {Pbf} pbf
 */
function readUsvgTreeField(tag, obj, pbf) {
    if (tag === 1) obj.width = obj.height = pbf.readVarint();
    else if (tag === 2) obj.height = pbf.readVarint();
    else if (tag === 3) obj.children.push(readNode(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 4) obj.linear_gradients.push(readLinearGradient(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 5) obj.radial_gradients.push(readRadialGradient(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 7) obj.clip_paths.push(readClipPath(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 8) obj.masks.push(readMask(pbf, pbf.readVarint() + pbf.pos));
}

/**
 * @typedef {object} Node
 * @property {Group} [group]
 * @property {Path} [path]
 * @property {"group" | "path"} [node]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Node}
 */
export function readNode(pbf, end) {
    return pbf.readFields(readNodeField, {}, end);
}

/**
 * @param {number} tag
 * @param {Node} obj
 * @param {Pbf} pbf
 */
function readNodeField(tag, obj, pbf) {
    if (tag === 1) { obj.group = readGroup(pbf, pbf.readVarint() + pbf.pos); obj.node = "group"; }
    else if (tag === 2) { obj.path = readPath(pbf, pbf.readVarint() + pbf.pos); obj.node = "path"; }
}

/**
 * @typedef {object} Group
 * @property {Transform} [transform]
 * @property {number} [opacity]
 * @property {number} [clip_path_idx]
 * @property {number} [mask_idx]
 * @property {Node[]} children
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Group}
 */
export function readGroup(pbf, end) {
    return pbf.readFields(readGroupField, {opacity: 255, children: []}, end);
}

/**
 * @param {number} tag
 * @param {Group} obj
 * @param {Pbf} pbf
 */
function readGroupField(tag, obj, pbf) {
    if (tag === 1) obj.transform = readTransform(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.opacity = pbf.readVarint();
    else if (tag === 5) obj.clip_path_idx = pbf.readVarint();
    else if (tag === 6) obj.mask_idx = pbf.readVarint();
    else if (tag === 7) obj.children.push(readNode(pbf, pbf.readVarint() + pbf.pos));
}

/**
 * @typedef {object} Transform
 * @property {number} [sx]
 * @property {number} [ky]
 * @property {number} [kx]
 * @property {number} [sy]
 * @property {number} [tx]
 * @property {number} [ty]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Transform}
 */
export function readTransform(pbf, end) {
    return pbf.readFields(readTransformField, {sx: 1, ky: 0, kx: 0, sy: 1, tx: 0, ty: 0}, end);
}

/**
 * @param {number} tag
 * @param {Transform} obj
 * @param {Pbf} pbf
 */
function readTransformField(tag, obj, pbf) {
    if (tag === 1) obj.sx = pbf.readFloat();
    else if (tag === 2) obj.ky = pbf.readFloat();
    else if (tag === 3) obj.kx = pbf.readFloat();
    else if (tag === 4) obj.sy = pbf.readFloat();
    else if (tag === 5) obj.tx = pbf.readFloat();
    else if (tag === 6) obj.ty = pbf.readFloat();
}

/**
 * @typedef {object} Path
 * @property {Fill} [fill]
 * @property {Stroke} [stroke]
 * @property {PaintOrder} [paint_order]
 * @property {PathCommand[]} commands
 * @property {number} [step]
 * @property {number[]} diffs
 * @property {PathRule} [rule]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Path}
 */
export function readPath(pbf, end) {
    return pbf.readFields(readPathField, {paint_order: 1, commands: [], step: 1, diffs: [], rule: PathRule.PATH_RULE_NON_ZERO}, end);
}

/**
 * @param {number} tag
 * @param {Path} obj
 * @param {Pbf} pbf
 */
function readPathField(tag, obj, pbf) {
    if (tag === 1) obj.fill = readFill(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.stroke = readStroke(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 3) obj.paint_order = pbf.readVarint();
    else if (tag === 5) pbf.readPackedVarint(obj.commands);
    else if (tag === 6) obj.step = pbf.readFloat();
    else if (tag === 7) pbf.readPackedSVarint(obj.diffs);
    else if (tag === 8) obj.rule = pbf.readVarint();
}

/**
 * @typedef {object} Fill
 * @property {number} [rgb_color]
 * @property {number} [linear_gradient_idx]
 * @property {number} [radial_gradient_idx]
 * @property {number} [opacity]
 * @property {"rgb_color" | "linear_gradient_idx" | "radial_gradient_idx"} [paint]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Fill}
 */
export function readFill(pbf, end) {
    return pbf.readFields(readFillField, {rgb_color: 0, paint: "rgb_color", opacity: 255}, end);
}

/**
 * @param {number} tag
 * @param {Fill} obj
 * @param {Pbf} pbf
 */
function readFillField(tag, obj, pbf) {
    if (tag === 1) { obj.rgb_color = pbf.readVarint(); obj.paint = "rgb_color"; }
    else if (tag === 2) { obj.linear_gradient_idx = pbf.readVarint(); obj.paint = "linear_gradient_idx"; }
    else if (tag === 3) { obj.radial_gradient_idx = pbf.readVarint(); obj.paint = "radial_gradient_idx"; }
    else if (tag === 5) obj.opacity = pbf.readVarint();
}

/**
 * @typedef {object} Stroke
 * @property {number} [rgb_color]
 * @property {number} [linear_gradient_idx]
 * @property {number} [radial_gradient_idx]
 * @property {number[]} dasharray
 * @property {number} [dashoffset]
 * @property {number} [miterlimit]
 * @property {number} [opacity]
 * @property {number} [width]
 * @property {LineCap} [linecap]
 * @property {LineJoin} [linejoin]
 * @property {"rgb_color" | "linear_gradient_idx" | "radial_gradient_idx"} [paint]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Stroke}
 */
export function readStroke(pbf, end) {
    return pbf.readFields(readStrokeField, {rgb_color: 0, paint: "rgb_color", dasharray: [], dashoffset: 0, miterlimit: 4, opacity: 255, width: 1, linecap: 1, linejoin: 1}, end);
}

/**
 * @param {number} tag
 * @param {Stroke} obj
 * @param {Pbf} pbf
 */
function readStrokeField(tag, obj, pbf) {
    if (tag === 1) { obj.rgb_color = pbf.readVarint(); obj.paint = "rgb_color"; }
    else if (tag === 2) { obj.linear_gradient_idx = pbf.readVarint(); obj.paint = "linear_gradient_idx"; }
    else if (tag === 3) { obj.radial_gradient_idx = pbf.readVarint(); obj.paint = "radial_gradient_idx"; }
    else if (tag === 5) pbf.readPackedFloat(obj.dasharray);
    else if (tag === 6) obj.dashoffset = pbf.readFloat();
    else if (tag === 7) obj.miterlimit = pbf.readFloat();
    else if (tag === 8) obj.opacity = pbf.readVarint();
    else if (tag === 9) obj.width = pbf.readFloat();
    else if (tag === 10) obj.linecap = pbf.readVarint();
    else if (tag === 11) obj.linejoin = pbf.readVarint();
}

/**
 * @typedef {object} LinearGradient
 * @property {Transform} [transform]
 * @property {SpreadMethod} [spread_method]
 * @property {Stop[]} stops
 * @property {number} [x1]
 * @property {number} [y1]
 * @property {number} [x2]
 * @property {number} [y2]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {LinearGradient}
 */
export function readLinearGradient(pbf, end) {
    return pbf.readFields(readLinearGradientField, {spread_method: 1, stops: [], x1: 0, y1: 0, x2: 1, y2: 0}, end);
}

/**
 * @param {number} tag
 * @param {LinearGradient} obj
 * @param {Pbf} pbf
 */
function readLinearGradientField(tag, obj, pbf) {
    if (tag === 1) obj.transform = readTransform(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.spread_method = pbf.readVarint();
    else if (tag === 3) obj.stops.push(readStop(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 4) obj.x1 = pbf.readFloat();
    else if (tag === 5) obj.y1 = pbf.readFloat();
    else if (tag === 6) obj.x2 = pbf.readFloat();
    else if (tag === 7) obj.y2 = pbf.readFloat();
}

/**
 * @typedef {object} Stop
 * @property {number} [offset]
 * @property {number} [opacity]
 * @property {number} [rgb_color]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Stop}
 */
export function readStop(pbf, end) {
    return pbf.readFields(readStopField, {offset: 0, opacity: 255, rgb_color: 0}, end);
}

/**
 * @param {number} tag
 * @param {Stop} obj
 * @param {Pbf} pbf
 */
function readStopField(tag, obj, pbf) {
    if (tag === 1) obj.offset = pbf.readFloat();
    else if (tag === 2) obj.opacity = pbf.readVarint();
    else if (tag === 3) obj.rgb_color = pbf.readVarint();
}

/**
 * @typedef {object} RadialGradient
 * @property {Transform} [transform]
 * @property {SpreadMethod} [spread_method]
 * @property {Stop[]} stops
 * @property {number} [cx]
 * @property {number} [cy]
 * @property {number} [r]
 * @property {number} [fx]
 * @property {number} [fy]
 * @property {number} [fr]
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {RadialGradient}
 */
export function readRadialGradient(pbf, end) {
    return pbf.readFields(readRadialGradientField, {spread_method: 1, stops: [], cx: 0.5, cy: 0.5, r: 0.5, fx: 0.5, fy: 0.5, fr: 0}, end);
}

/**
 * @param {number} tag
 * @param {RadialGradient} obj
 * @param {Pbf} pbf
 */
function readRadialGradientField(tag, obj, pbf) {
    if (tag === 1) obj.transform = readTransform(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.spread_method = pbf.readVarint();
    else if (tag === 3) obj.stops.push(readStop(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 4) obj.cx = pbf.readFloat();
    else if (tag === 5) obj.cy = pbf.readFloat();
    else if (tag === 6) obj.r = pbf.readFloat();
    else if (tag === 7) obj.fx = pbf.readFloat();
    else if (tag === 8) obj.fy = pbf.readFloat();
    else if (tag === 9) obj.fr = pbf.readFloat();
}

/**
 * @typedef {object} ClipPath
 * @property {Transform} [transform]
 * @property {number} [clip_path_idx]
 * @property {Node[]} children
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {ClipPath}
 */
export function readClipPath(pbf, end) {
    return pbf.readFields(readClipPathField, {children: []}, end);
}

/**
 * @param {number} tag
 * @param {ClipPath} obj
 * @param {Pbf} pbf
 */
function readClipPathField(tag, obj, pbf) {
    if (tag === 1) obj.transform = readTransform(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.clip_path_idx = pbf.readVarint();
    else if (tag === 3) obj.children.push(readNode(pbf, pbf.readVarint() + pbf.pos));
}

/**
 * @typedef {object} Mask
 * @property {number} [left]
 * @property {number} [width]
 * @property {number} [top]
 * @property {number} [height]
 * @property {MaskType} [mask_type]
 * @property {number} [mask_idx]
 * @property {Node[]} children
 */

/**
 * @param {Pbf} pbf
 * @param {number} [end]
 * @returns {Mask}
 */
export function readMask(pbf, end) {
    return pbf.readFields(readMaskField, {left: 0, width: 20, mask_type: 1, children: []}, end);
}

/**
 * @param {number} tag
 * @param {Mask} obj
 * @param {Pbf} pbf
 */
function readMaskField(tag, obj, pbf) {
    if (tag === 1) obj.left = obj.top = pbf.readFloat();
    else if (tag === 2) obj.width = obj.height = pbf.readFloat();
    else if (tag === 3) obj.top = pbf.readFloat();
    else if (tag === 4) obj.height = pbf.readFloat();
    else if (tag === 5) obj.mask_type = pbf.readVarint();
    else if (tag === 6) obj.mask_idx = pbf.readVarint();
    else if (tag === 7) obj.children.push(readNode(pbf, pbf.readVarint() + pbf.pos));
}
