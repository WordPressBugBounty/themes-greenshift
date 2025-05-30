<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}
if (!current_user_can('manage_options')) {
    wp_die('Unauthorized user');
}

$onboard_options = get_option('greenshift_onboard_options');
GreenshiftMenuSettings::greenshift_check_addons();

$footerPage = get_page_by_path('footer', OBJECT, 'wp_template_part');
$footerPageId = is_object($footerPage) ? $footerPage->ID : '';
if (!$footerPageId) {
    $templateContent = file_get_contents(get_template_directory() . '/parts/footer.html');
    $footerPageId = wp_insert_post(array(
        'post_title' => 'Footer',
        'post_name' => 'footer',
        'post_type' => 'wp_template_part',
        'post_status' => 'publish',
        'post_content' => wp_slash($templateContent) // Set the content from the theme file
    ));
    $category_domain = 'wp_theme';
    $category_slug = 'greenshift';
    $category_name = 'greenshift';
    wp_set_object_terms($footerPageId, $category_slug, $category_domain, false);
    $templatepart_domain = 'wp_template_part_area';
    $templatepart_slug = 'footer';
    $templatepart_name = 'footer';
    wp_set_object_terms($footerPageId, $templatepart_slug, $templatepart_domain, false);
}else{
    $templateContent = get_post_field('post_content', $footerPageId);
}

$footer2_template = '<!-- wp:pattern {"slug":"greenshift/footer-default"} /-->';
$footer3_template = '<!-- wp:pattern {"slug":"greenshift/footer-central"} /-->';
$footer4_template = '<!-- wp:pattern {"slug":"greenshift/footer-mega"} /-->';
$footer5_template = '<!-- wp:pattern {"slug":"greenshift/footer-simple"} /-->';
$footer6_template = '<!-- wp:pattern {"slug":"greenshift/footer-white"} /-->';
$footer7_template = '<!-- wp:pattern {"slug":"greenshift/footer-default-mega"} /-->';

if (
    (isset($_POST['gspb_save_settings']) || isset($_POST['gspb_save_settings_next'])) && isset($_POST['gspb_settings_field']) &&
    wp_verify_nonce(
        sanitize_text_field(wp_unslash($_POST['gspb_settings_field'])),
        'gspb_settings_page_action'
    )
) {

    if (sanitize_text_field($_POST['footer_type'])) {
        if(empty($onboard_options)){
            $onboard_options = array();
        }
        $onboard_options['footer'] = sanitize_text_field($_POST['footer_type']);
        //update_option('greenshift_onboard_options', $onboard_options);
    }
    if (isset($_POST['gspb_save_settings_next'])) {
        echo '<script>window.location.replace("'.admin_url('admin.php?page=greenshift_theme_settings&tab=pages').'");</script>';
        exit;
    }
}

?>
<style>
    .template_item{position: relative;}
    .template_item .img_temp {
        position: absolute;
        bottom: calc(100% + 10px);
        left:0;
        right: 0;
        pointer-events: none;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s;
    }
    .template_item:hover .img_temp {
        opacity: 1;
        transform: translateY(0);
    }
    [type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #2184f9;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
    .gspb_main_buttons #gspb_template_import_btns .gspb_layout_button+div {
        display: none;
    }
    .gspb_main_buttons {
        padding: 20px 0 !important;
    }

    .browser-template {
        height: 800px;
        overflow: hidden;
        border: 3px solid #dedede;
        border-top: none;
        border-radius: 8px;
    }

    .browser-template__top-bar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 10px;
        background: #dedede;
    }

    .browser-template__buttons {
        display: flex;
    }

    .browser-template__buttons_item {
        width: 10px;
        height: 10px;
        margin-left: 5px;
        border-radius: 100px;
        background: #c5c5c5;
    }

    .browser-template__buttons_item:first-child {
        margin-left: 0;
    }

    .browser-template__address {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
        height: 25px;
        margin: 0 15px;
        border-radius: 4px;
        background: #f8f8f8;
    }

    .browser-template__controls {
        display: flex;
    }

    .browser-template__controls_item {
        width: 12px;
        height: 12px;
        margin-left: 10px;
        color: #b8b8b8;
    }

    .browser-template__controls_item:first-child {
        margin-left: 0;
    }

    .browser-template {
        margin: 0 auto;
        max-width: 1200px;
        height: 60vh;
        display: flex;
        flex-direction: column;
    }

    iframe {
        height: calc(100% - 45px);
    }
</style>
<div class="wp-block-greenshift-blocks-container gspb_container gspb_container-gsbp-efb64efe-d083" id="gspb_container-id-gsbp-efb64efe-d083">
    <h2 id="gspb_heading-id-gsbp-ca0b0ada-6561" class="gspb_heading gspb_heading-id-gsbp-ca0b0ada-6561 "><?php echo esc_html($title); ?></h2>
</div>

<div class="greenshift_form wp-block-greenshift-blocks-container gspb_container gspb_container-gsbp-7b4f8e8f-1a69" id="gspb_container-id-gsbp-7b4f8e8f-1a69">
    <form method="POST">
        <?php wp_nonce_field('gspb_settings_page_action', 'gspb_settings_field'); ?>
        <div class="settings-container">
            <div>
            <div class="gs-box notice_type icon_type">
                    <div class="gs-box-icon"><svg class="" style="display:inline-block;vertical-align:middle" width="32" height="32" viewBox="0 0 704 1024" xmlns="http://www.w3.org/2000/svg">
                            <path style="fill:#565D66" d="M352 160c-105.88 0-192 86.12-192 192 0 17.68 14.32 32 32 32s32-14.32 32-32c0-70.6 57.44-128 128-128 17.68 0 32-14.32 32-32s-14.32-32-32-32zM192.12 918.34c0 6.3 1.86 12.44 5.36 17.68l49.020 73.68c5.94 8.92 15.94 14.28 26.64 14.28h157.7c10.72 0 20.72-5.36 26.64-14.28l49.020-73.68c3.48-5.24 5.34-11.4 5.36-17.68l0.1-86.36h-319.92l0.080 86.36zM352 0c-204.56 0-352 165.94-352 352 0 88.74 32.9 169.7 87.12 231.56 33.28 37.98 85.48 117.6 104.84 184.32v0.12h96v-0.24c-0.020-9.54-1.44-19.020-4.3-28.14-11.18-35.62-45.64-129.54-124.34-219.34-41.080-46.86-63.040-106.3-63.22-168.28-0.4-147.28 119.34-256 255.9-256 141.16 0 256 114.84 256 256 0 61.94-22.48 121.7-63.3 168.28-78.22 89.22-112.84 182.94-124.2 218.92-2.805 8.545-4.428 18.381-4.44 28.594l-0 0.006v0.2h96v-0.1c19.36-66.74 71.56-146.36 104.84-184.32 54.2-61.88 87.1-142.84 87.1-231.58 0-194.4-157.6-352-352-352z"></path>
                        </svg></div>
                    <div class="gs-box-text">
                    <?php esc_html_e("Attention. Selecting footer will overwrite your footer template. Hover on title to preview it. You can edit footer elements in", "greenshift"); ?>
                     <a href="<?php echo admin_url('site-editor.php?postType=wp_template_part&postId=greenshift%2F%2Ffooter&categoryId=footer&categoryType=wp_template_part&canvas=edit'); ?>" target="_blank"><?php esc_html_e("Site Editor", "greenshift"); ?></a>
                    </div>
                </div>
                <h4>
                    <?php esc_html_e("Your footer displays", "greenshift"); ?>
                </h4>
            </div>
            <div class="flex-right">
                <div style=" display: flex; flex-direction: column; gap: 15px">
                    <div class="template_item">
                        <input type="radio" name="footer_type" id="footer1" value="footer1" onchange="handleRadioButtonChange(this)" data-pageid="<?php echo (int)$footerPageId;?>" data-content='<?php echo htmlspecialchars(json_encode($templateContent), ENT_QUOTES);?>' <?php echo ((!empty($onboard_options['footer']) && $onboard_options['footer'] == 'default') || empty($onboard_options['footer'])) ? 'checked' : ''; ?>>
                        <label for="footer1"><?php esc_html_e("Current Footer", "greenshift"); ?></label>
                    </div>
                    <div class="template_item">
                        <input type="radio" name="footer_type" id="footer2" value="footer2" data-pageid="<?php echo (int)$footerPageId;?>" data-content='<?php echo json_encode($footer2_template);?>' onchange="handleRadioButtonChange(this)" <?php echo (!empty($onboard_options['footer']) && $onboard_options['footer'] == 'footer2') ? 'checked' : ''; ?>>
                        <label for="footer2"><?php esc_html_e("Footer Default", "greenshift"); ?></label>
                        <div class="img_temp">
                            <img src="<?php echo GREENSHIFT_THEME_DIR . '/inc/admin_menu/onboard/img/footer.webp'; ?>" alt="footer2" style="max-width:100%; height:auto; border:1px solid #eee">
                        </div>
                    </div>
                    <div class="template_item">
                        <input type="radio" id="footer3" name="footer_type" value="footer3" data-pageid="<?php echo (int)$footerPageId;?>" data-content='<?php echo json_encode($footer3_template);?>' onchange="handleRadioButtonChange(this)" <?php echo (!empty($onboard_options['footer']) && $onboard_options['footer'] == 'footer3') ? 'checked' : ''; ?>>
                        <label for="footer3"><?php esc_html_e("Footer with banner", "greenshift"); ?></label>
                        <div class="img_temp">
                            <img src="<?php echo GREENSHIFT_THEME_DIR . '/inc/admin_menu/onboard/img/footer2.webp'; ?>" alt="footer3" style="max-width:100%; height:auto; border:1px solid #eee">
                        </div>
                    </div>

                    <div class="template_item">
                        <input type="radio" id="footer4" name="footer_type" value="footer4" data-pageid="<?php echo (int)$footerPageId;?>" data-content='<?php echo json_encode($footer4_template);?>' onchange="handleRadioButtonChange(this)" <?php echo (!empty($onboard_options['footer']) && $onboard_options['footer'] == 'footer4') ? 'checked' : ''; ?>>
                        <label for="footer4"> <?php esc_html_e("Footer 5 Column", "greenshift"); ?></label>
                        <div class="img_temp">
                            <img src="<?php echo GREENSHIFT_THEME_DIR . '/inc/admin_menu/onboard/img/footer3.webp'; ?>" alt="footer4" style="max-width:100%; height:auto; border:1px solid #eee">
                        </div>
                    </div>

                    <div class="template_item">
                        <input type="radio" id="footer5" name="footer_type" value="footer5" data-pageid="<?php echo (int)$footerPageId;?>" data-content='<?php echo json_encode($footer5_template);?>' onchange="handleRadioButtonChange(this)" <?php echo (!empty($onboard_options['footer']) && $onboard_options['footer'] == 'footer5') ? 'checked' : ''; ?>>
                        <label for="footer5"> <?php esc_html_e("Footer Simple", "greenshift"); ?></label>
                        <div class="img_temp">
                            <img src="<?php echo GREENSHIFT_THEME_DIR . '/inc/admin_menu/onboard/img/footer4.webp'; ?>" alt="footer5" style="max-width:100%; height:auto; border:1px solid #eee">
                        </div>
                    </div>

                    <div class="template_item">
                        <input type="radio" id="footer6" name="footer_type" value="footer6" data-pageid="<?php echo (int)$footerPageId;?>" data-content='<?php echo json_encode($footer6_template);?>' onchange="handleRadioButtonChange(this)" <?php echo (!empty($onboard_options['footer']) && $onboard_options['footer'] == 'footer6') ? 'checked' : ''; ?>>
                        <label for="footer6"> <?php esc_html_e("Footer with transparent background", "greenshift"); ?></label>
                        <div class="img_temp">
                            <img src="<?php echo GREENSHIFT_THEME_DIR . '/inc/admin_menu/onboard/img/footerwhite.webp'; ?>" alt="footer6" style="max-width:100%; height:auto; border:1px solid #eee">
                        </div>
                    </div>

                    <div class="template_item">
                        <input type="radio" id="footer7" name="footer_type" value="footer7" data-pageid="<?php echo (int)$footerPageId;?>" data-content='<?php echo json_encode($footer7_template);?>' onchange="handleRadioButtonChange(this)" <?php echo (!empty($onboard_options['footer']) && $onboard_options['footer'] == 'footer7') ? 'checked' : ''; ?>>
                        <label for="footer7"> <?php esc_html_e("Mega Footer", "greenshift"); ?></label>
                        <div class="img_temp">
                            <img src="<?php echo GREENSHIFT_THEME_DIR . '/inc/admin_menu/onboard/img/footermegadefault.webp'; ?>" alt="footer7" style="max-width:100%; height:auto; border:1px solid #eee">
                        </div>
                    </div>

                    <div class="gspb_main_buttons">
                            <div id="gspb_template_import_btns" data-type="footer" data-id="<?php echo (int)$footerPageId;?>" data-tab="Templates" data-key-default="114"></div>
                        </div>

                </div>
            </div>
        </div>
        <div class="settings-container">
            <div class="browser-template">
                <div class="browser-template__top-bar">
                    <ul class="browser-template__buttons">
                        <li class="browser-template__buttons_item"></li>
                        <li class="browser-template__buttons_item"></li>
                        <li class="browser-template__buttons_item"></li>
                    </ul>

                    <div class="browser-template__address">

                    </div>

                    <ul class="browser-template__controls">
                        <li class="browser-template__controls_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z" />
                            </svg>
                        </li>
                        <li class="browser-template__controls_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z" />
                            </svg>
                        </li>
                        <li class="browser-template__controls_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256.001 8 119.34 8 7.9 119.525 8 256.185 8.1 393.067 119.095 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.353-12.561.482-17.433l-19.738-19.738c-4.498-4.498-11.753-4.785-16.501-.552C351.787 433.246 306.105 452 256 452c-108.321 0-196-87.662-196-196 0-108.321 87.662-196 196-196 54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486z" />
                            </svg>
                        </li>
                    </ul>
                </div>

                <div id="iframeContainer" style="flex-grow:1">
                    <iframe title="Iframe" id="greenshift-homepage-iframe" style="width:100%;" src="<?php echo esc_url( home_url() ); ?>?admin_bar=false">
                    </iframe>
                </div>
            </div>

        </div>
        <div style="display:flex; gap: 15px; ">
            <input type="submit" name="gspb_save_settings"
            value="<?php esc_attr_e('Save', 'greenshift') ?>"
            class="button button-secondary button-large" style="margin: 20px 0 10px 0">
            <input type="submit" name="gspb_save_settings_next"
                value="<?php esc_attr_e('Save and Continue', 'greenshift') ?>"
                class="button button-primary button-large" style="margin: 20px 0 10px 0">
        </div>
    </form>

    <script>
        function handleRadioButtonChange(radioButton) {
            var selectedValue = radioButton.value;
            let pageid = radioButton.getAttribute('data-pageid');
            let content = radioButton.getAttribute('data-content');
            wp.apiFetch({
                path: 'greenshift/v1/importtemplatepart',
                method: 'POST',
                footers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                data: { pageid, content},
            }).then(response => {
                const { success } = JSON.parse(response);
                if (success) {
                    console.log('Template part imported');
                    let iframe = document.getElementById('greenshift-homepage-iframe');
                    iframe.contentWindow.location.reload();
                    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                    if (iframeDocument) {
                        iframeDocument.documentElement.scrollTop = iframeDocument.documentElement.scrollHeight;
                    }
                }
            });

        };

        jQuery(document).ready(function($) {
            const iframeContainer = document.querySelector('#iframeContainer');
            var iframe = document.getElementById('greenshift-homepage-iframe');

            // Access the iframe's document object
            var iframeDocument = iframe.contentWindow.document;

            // Create a <style> element and set its content to your CSS code
            var styleElement = iframeDocument.createElement('style');
            styleElement.innerHTML = '#wpadminbar{display:none}html{margin:0 !important}';

            // Append the <style> element to the head of the iframe's document
            iframeDocument.head.appendChild(styleElement);
            const deviceWidth = 1600;
            const scaleFactor = (iframeContainer.clientWidth) / deviceWidth;

            iframeContainer.children[0].style.width = deviceWidth + "px";
            iframeContainer.children[0].style.height = (iframeContainer.clientHeight) / scaleFactor + "px";
            iframeContainer.children[0].style.transform = `scale(${scaleFactor})`;
            iframeContainer.children[0].style.transformOrigin = 'top left';
            window.addEventListener('resize', () => {
                const iframeContainer = document.querySelector('#iframeContainer');
                const deviceWidth = 1600;
                const scaleFactor = (iframeContainer.clientWidth) / deviceWidth;

                iframeContainer.children[0].style.width = deviceWidth + "px";
                iframeContainer.children[0].style.height = (iframeContainer.clientHeight) / scaleFactor + "px";
                iframeContainer.children[0].style.transform = `scale(${scaleFactor})`;
                iframeContainer.children[0].style.transformOrigin = 'top left';

            });
        });
    </script>
</div>